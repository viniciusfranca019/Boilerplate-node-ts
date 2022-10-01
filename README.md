This is a boiler plate for nodejs apps with typescript

## Versions

    - node version = 18.3.0, you can change it with you want

## Instructions

    1. first you gonna need to use docker to run this boiler plate
    2. on package json you can change the app name and his description
    3. on docker-composes change the names of containers from boilerplate to whatever you want
    4. change the name of the container on command make shell, on make file, to works like a charm

## Commands
    - make build : will build and start the app with docker
    - make serve : will start the app with docker
    - make dev : will build and start the app with docker and use the ts-node-dev
    - make shell : will open the container app shell on your terminal