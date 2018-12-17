#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m' # No Color

check_restart () {
if [[ "$1" = "ESC" ]];
then
clear >$(tty)
exec "$0" "$@"
fi
}
echo \#1 Provide translation key:
read key
echo Current pl value:
docker-compose exec node-service bash -c "cd .. && node checkTranslation.js $key pl"
echo \#2 Enter pl translation or ESC to go back:
read pl
check_restart "$pl"
echo Current en value:
docker-compose exec node-service bash -c "cd .. && node checkTranslation.js $key en"
echo \#3 Enter en translation or ESC to go back:
read en
check_restart "$en"

docker-compose exec node-service bash -c "cd .. && node translate.js $key $pl $en"