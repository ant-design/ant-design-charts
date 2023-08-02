#!/usr/bin/env bash
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

git branch -D gh-pages

git checkout -b gh-pages

pwd

echo "\033[49;32m \n******* start build website *******\n \033[0m"

echo "\033[49;32m \n******* installing dependencies *******\n \033[0m"

pnpm i

echo "\033[49;32m \n******* building dependencies *******\n \033[0m"

pnpm build:lib

echo "\033[49;32m \n******* removing node_modules *******\n \033[0m"

:> .npmrc

echo "auto-install-peers=false \nstrict-peer-dependencies=false\nshamefully-hoist=true" >> .npmrc


rm -rf ./pnpm-lock.yaml

rm -rf ./node_modules


echo "\033[49;32m \n******* installing website dependencies *******\n \033[0m"

pnpm i

echo "\033[49;32m \n******* building webite *******\n \033[0m"

pnpm build:site

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

echo "\033[49;32m \n******* 网站代码已更新，请手动push *******\n \033[0m"

#git push --set-upstream origin gh-pages --force