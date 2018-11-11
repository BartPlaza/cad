#!/bin/bash

docker-compose up -d
docker-compose exec node-service bash -c "npm install && npm start"
