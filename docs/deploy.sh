#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

##git remote add origin github.com/fontcao/blogs.git
#git push -f origin main:gh-pages
#git branch dev
#git checkout dev
#git push -u origin main:dev -f

#git push -f github.com/fontcao/blogs.git main:dev
git push -f https://github.com/fontcao/blogs.git main:gh-pages
cd -
