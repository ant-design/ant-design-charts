#!/usr/bin/env bash
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

git branch -D gh-pages

git checkout -b gh-pages

pwd

echo "\033[49;32m \n******* start build website *******\n \033[0m"

echo "\033[49;32m \n******* installing dependencies *******\n \033[0m"

yarn

echo "\033[49;32m \n******* building dependencies *******\n \033[0m"

yarn run build

echo "\033[49;32m \n******* removing node_modules *******\n \033[0m"

rm -rf ./package.json

rm -rf ./node_modules

cp ./scripts/website/package.json ./

echo "\033[49;32m \n******* installing website dependencies *******\n \033[0m"

yarn

echo "\033[49;32m \n******* building webite *******\n \033[0m"

yarn run site:build

echo "\033[49;32m \n******* copy website assets *******\n \033[0m"

rm -rf ./.github

rm -rf ./config

rm -rf ./node_modules

rm -rf ./public

rm -rf ./template

rm -rf ./package.json

cp -r ./packages/site/public/ .

rm -rf ./packages

echo "\033[49;32m \n******* push assets *******\n \033[0m"

git add .

git commit -m 'docs: 网站更新'

git push --set-upstream origin gh-pages --force