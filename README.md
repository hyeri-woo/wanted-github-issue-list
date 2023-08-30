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
│   │    ├── 📄 Header.tsx
│   │    └── 📄 Loading.tsx
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

## 기능 상세

### 1. 이슈 목록 화면

> - 이슈 목록 가져오기 API 활용
> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
> - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
> - 다섯번째 셀마다 광고 이미지 출력
> - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

#### API 활용

- axios로 fetchGetIssues 함수 정의 (parameter로 organization, repository, page 받음)
- redux에서 asyncThunk 사용해서 state.value 안에 데이터 저장

#### 지정된 조건 사용

- GITHUB REST API issue의 param 사용

```js
params: {
  state: 'open',      // default 값이라 넣어주지 않음
  direction: 'desc',  // default 값이라 넣어주지 않음
  sort: 'comments',   // 댓글 기준으로 정렬
  per_page: 10,       // 한번에 10개씩 받아오김
  page: page,         // 무한 스크롤때 사용
}
```

#### IssueItem 표시

- 이슈번호, 이슈제목, 작성자, 작성일, 코멘트수를 IssueItem 컴포넌트 안에서 뿌림
- IssueList에서 issues를 redux를 통해 받아오고 issues.map을 사용해 뿌림

#### 광고 이미지 출력

- IssueList에서 map할때 index%4===0일 경우만 AdCard mount 하기

#### 무한 스크롤

- IssueList 안에서 scroll 이벤트 리스너 추가
- 이벤트 리스너 안에서 dispatch로 fetchIssues (asyncThunk) 호출해서 10개씩 추가

### 2. 이슈 상세 화면

> - 이슈의 상세 내용 표시
> - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

- IssueDetail 안에서 IssueItem mount하고 IssueItem에서 children 받아서 있을 시에만 화면에 뿌리기

### 3. 공통 헤더

> - 두 페이지는 공통 헤더를 공유
> - 헤더에는 Organization Name / Repository Name이 표시

- organization과 repository를 redux에서 가져와서 Header 컴포넌트에 Props로 넘겨줌
- 나중에 API 호출할때 organization과 repository가 변경될때를 대비해서 slice에 저장
- 바뀔때를 대비한 reducer는 추가 x
