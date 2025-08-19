#!/bin/bash
echo "Installing Nginx if not present..."
sudo yum instll -y nginx
sudo cp -r * /var/www/html
