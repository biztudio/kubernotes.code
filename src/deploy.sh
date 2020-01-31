#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm -v
yarn -v
yarn
yarn docs:build

cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kubernotes/kubernotes.github.io.git master

cd -