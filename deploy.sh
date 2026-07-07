#!/bin/bash

#########################################################
# React (Create React App) Deployment Script
# Repository: https://github.com/sulaimontaoban-lgtm/APATA.git
# Project Folder: my-app
# Author: Sulaimon Taoban
#########################################################

set -e

echo "========================================"
echo "Updating Ubuntu..."
echo "========================================"

sudo apt update -y
sudo apt upgrade -y

echo "========================================"
echo "Installing required packages..."
echo "========================================"

sudo apt install -y git curl nginx

echo "========================================"
echo "Installing Node.js 20 LTS..."
echo "========================================"

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo "========================================"
echo "Node Version:"
node -v
echo "NPM Version:"
npm -v

echo "========================================"
echo "Creating swap file (if needed)..."
echo "========================================"

if [ ! -f /swapfile ]; then
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile

    if ! grep -q "/swapfile" /etc/fstab; then
        echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    fi
fi

echo "========================================"
echo "Removing old project..."
echo "========================================"

rm -rf ~/APATA

echo "========================================"
echo "Cloning repository..."
echo "========================================"

git clone https://github.com/sulaimontaoban-lgtm/APATA.git

echo "========================================"
echo "Entering React project..."
echo "========================================"

cd ~/APATA/my-app

echo "========================================"
echo "Installing dependencies..."
echo "========================================"

npm install

echo "========================================"
echo "Increasing Node memory..."
echo "========================================"

export NODE_OPTIONS="--max-old-space-size=2048"

echo "========================================"
echo "Building React application..."
echo "========================================"

npm run build

echo "========================================"
echo "Deploying to Nginx..."
echo "========================================"

sudo rm -rf /var/www/html/*
sudo cp -r build/* /var/www/html/

echo "========================================"
echo "Setting permissions..."
echo "========================================"

sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "========================================"
echo "Configuring Nginx..."
echo "========================================"

sudo tee /etc/nginx/sites-available/default > /dev/null <<EOF
server {
    listen 80;
    server_name _;

    root /var/www/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    error_page 404 /index.html;
}
EOF

echo "========================================"
echo "Testing Nginx configuration..."
echo "========================================"

sudo nginx -t

echo "========================================"
echo "Restarting Nginx..."
echo "========================================"

sudo systemctl restart nginx
sudo systemctl enable nginx

echo "========================================"
echo "Deployment Successful!"
echo "========================================"

PUBLIC_IP=$(curl -s http://checkip.amazonaws.com || echo "YOUR_PUBLIC_IP")

echo ""
echo "Your React application is live at:"
echo "http://$PUBLIC_IP"
echo ""