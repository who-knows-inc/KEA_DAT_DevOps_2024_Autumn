terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.83.0"
    }
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
}

resource "azurerm_resource_group" "terraform_class" {
  name     = "terraform_class-resources"
  location = "North Europe"
}

resource "azurerm_virtual_network" "terraform_class" {
  name                = "terraform_class-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.terraform_class.location
  resource_group_name = azurerm_resource_group.terraform_class.name
}

resource "azurerm_subnet" "terraform_class" {
  name                 = "internal"
  resource_group_name  = azurerm_resource_group.terraform_class.name
  virtual_network_name = azurerm_virtual_network.terraform_class.name
  address_prefixes     = ["10.0.2.0/24"]
}

resource "azurerm_public_ip" "terraform_class" {
  name                = "terraform_class-publicip"
  location            = azurerm_resource_group.terraform_class.location
  resource_group_name = azurerm_resource_group.terraform_class.name
  allocation_method   = "Static"
}

resource "azurerm_network_interface" "terraform_class" {
  name                = "terraform_class-nic"
  location            = azurerm_resource_group.terraform_class.location
  resource_group_name = azurerm_resource_group.terraform_class.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.terraform_class.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.terraform_class.id
  }
}

resource "azurerm_linux_virtual_machine" "terraform_class" {
  name                = var.vm_name
  resource_group_name = azurerm_resource_group.terraform_class.name
  location            = azurerm_resource_group.terraform_class.location
  size                = var.vm_size
  admin_username      = "adminuser"
  network_interface_ids = [
    azurerm_network_interface.terraform_class.id,
  ]
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts-gen2"
    version   = "latest"
  }
  admin_ssh_key {
    username   = "adminuser"
    public_key = file("~/.ssh/id_rsa.pub")
  }
  disable_password_authentication = true

  provisioner "remote-exec" {
    inline = split("\n", templatefile("${path.module}/inline_commands.sh", {}))
    connection {
      type        = "ssh"
      user        = "adminuser"
      private_key = file("~/.ssh/id_rsa")
      host        = self.public_ip_address
      timeout     = "2m"
    }
  }
}

resource "azurerm_network_security_group" "terraform_class_nsg" {
  name                = "terraform_class-nsg"
  location            = azurerm_resource_group.terraform_class.location
  resource_group_name = azurerm_resource_group.terraform_class.name

  security_rule {
    name                       = "allow-8080"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "8080"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}

resource "azurerm_network_security_rule" "terraform_class_ssh_rule" {
  name                        = "SSH"
  priority                    = 1000
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"
  source_port_range           = "*"
  destination_port_range      = "22"
  source_address_prefix       = "*"
  destination_address_prefix  = "*"
  network_security_group_name = azurerm_network_security_group.terraform_class_nsg.name
  resource_group_name         = azurerm_resource_group.terraform_class.name
}