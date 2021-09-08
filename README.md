# SessionGO next

半ば放置に近い [SessionGO](https://sessiongo.com) をなんとかするプロジェクト。  
基本新規で書き直してリニューアルしたい。（UIはどうするか検討）

## 🎻 SessionGO ?

主にアイルランド音楽のセッション情報を共有するためのイベントリストサイト。  

### 💭 Feature & Future

- セッション情報共有（既存）
- 出席者管理機能？
- セッション会場ごとの頻出チューン共有？
- 覚えたセッションチューンの記録・共有？
- オンラインセッションとなんか連携したい
- チューンの演奏動画とか投稿できたら面白そう
- [TheSession](https://thesession.org/)の[API](https://thesession.org/api)使ってなんかしたい

## 👨‍💻Technology Stack

### Architecture
- Monorepo (yarn workspace)

### Frontend
- Next.js
- React
- TypeScript

### Backend
- Firestore?
- Firebase Authentication or NextAuth.js?
- Firebase Storege?
- Firebase Functions?

### Infrastructure

- Vercel or Cloud Run + Firebase Hosting?

### Tools

- Yarn v3
- Docker?
