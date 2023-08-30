# WANTED 프리온보딩 프론트엔드 2주차 과제

## 1. 배포 링크

https://wanted-github-issue-list.netlify.app/

## 2. 사용 라이브러리

```js
  "dependencies": {
    "react-redux": "^8.1.2",
    "@reduxjs/toolkit": "^1.9.5",
    "redux-typescript": "^1.2.1",
    "axios": "^1.2.2",
    "react-markdown": "^8.0.7",
    "react-router-dom": "^6.15.0",
    "styled-components": "^6.0.7",
    "typescript": "^4.9.5",
  },
  "devDependencies": {
    "@trivago/prettier-plugin-sort-imports": "^4.2.0",
    "eslint": "^8.48.0",
    "eslint-config-prettier": "^9.0.0",
    "husky": "^8.0.3",
    "prettier": "^3.0.2"
  },
```

## 3. 프로젝트 실행 방법

1. 프로젝트 패키지 설치

```
npm install
```

2. 프로젝트 실행

```
npm start
```

## 4. 프로젝트 구조

```
📦 src
├── 📂 api
├── 📂 components
│   ├── 📂 common
│   │    ├── 📄 AdCard.tsx
│   │    └── 📄 Header.tsx
│   ├── 📂 issue
│   │    ├── 📄 IssueDetail.tsx
│   │    ├── 📄 IssueItem.tsx
│   │    └── 📄 IssueList.tsx
├── 📂 pages
│   ├── 📄 Detail.tsx
│   ├── 📄 Issue.tsx
│   └── 📄 NotFound.tsx
├── 📂 redux
│   │    ├── 📄 issueSlice.ts
│   │    └── 📄 store.ts
├── 📂 routes
│   │    └── 📄 Router.tsx
├── 📂 types
└── 📂 styles
```
