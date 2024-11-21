echo "============================================================================================"
echo "Update packages"
echo "============================================================================================"
sudo apt-get update && sudo apt-get install -y software-properties-common
echo "============================================================================================"
echo "Install Docker and give user permission"
echo "============================================================================================"
sudo apt install -y docker.io
sudo usermod -aG docker $(whoami)
sudo systemctl restart docker
sudo apt install -y docker-compose