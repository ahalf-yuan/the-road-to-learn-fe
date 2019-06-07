#!usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config user.email "yazhener@icloud.com"
git config user.name "yuanyazhen"
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yuanyazhen/the-road-to-learn-fe.git master:gh-pages

cd -