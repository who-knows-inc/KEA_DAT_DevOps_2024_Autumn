variable "vm_name" {
  description = "The name of the virtual machine"
  type        = string
  default     = "main-vm"
}

variable "vm_size" {
  description = "The size of the virtual machine"
  type        = string
  default     = "Standard_B1s"
}