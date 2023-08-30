export type Issue = {
  id: number;
  number: number;
  title: string;
  author: string;
  date: string;
  comments: number;
  image: string;
  body: string;
};

// id: id
// 이슈번호: number
// 제목: title
// 작성자: user.login
// 작성일: created_at
// 코멘트 수: comments
// 작성자 프로필 이미지: user.avatar_url
// 본문: body
