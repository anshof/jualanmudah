#!/bin/bash

eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

source ~/.profile
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin
sudo docker stop slytherin-fe
sudo docker rm slytherin-fe
sudo docker rmi adul11/slytherin-fe:latest
sudo docker run -d --name slytherin-fe -p 8443:80 adul11/slytherin-fe:latest
