# firebaseui-ja

公式がロケール別の publish(npm)に対応していない + v9 対応がまだなので自前でビルドする

# import

## local package として

ローカルパッケージみたいに登録しておくと楽。

e.g. yarn workspace

```json
  "dependencies": {
    "firebaseui": "workspace:src/firebaseui",
  }
```

## import

```js
import firebaseui from 'firebaseui/dist/npm__{LANGUAGE_CODE}'
```

firebase.d.ts とかにアンビエント宣言する

```typescript
type firebaseui = import('firebaseui')

declare module 'firebaseui/dist/npm__ja' {
  export = firebaseui
}
```

## build dependencies

see https://github.com/firebase/firebaseui-web#dependencies

## build(only en & ja)

```
sh build.sh
```
