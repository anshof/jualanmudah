FROM nginx:stable
MAINTAINER Abdullah Romli  "romli@alterra.id"

RUN mkdir -p /home/deploy/build
RUN mkdir -p /home/deploy/log/nginx


COPY default.conf /etc/nginx/conf.d
ADD build/. /home/deploy/build


WORKDIR /home/deploy/build
