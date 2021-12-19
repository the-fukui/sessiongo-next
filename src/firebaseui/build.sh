#!/bin/sh

git clone https://github.com/firebase/firebaseui-web.git
cd firebaseui-web
npm i
npm run build
npm run build build-js-ja
npm run build build-npm-ja

cd ../
cp -r firebaseui-web/dist ./dist
cp firebaseui-web/package.json ./
cp firebaseui-web/package-lock.json ./