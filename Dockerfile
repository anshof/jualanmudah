FROM nginx:stable
MAINTAINER Abdullah Romli  "romli@alterra.id"

RUN mkdir -p /deploy/build
RUN mkdir -p /deploy/log/nginx


COPY default.conf /etc/nginx/conf.d
ADD build/. /deploy/build


WORKDIR /deploy/build
