import { Issue } from '../types';
import instance from './index';

const fetchGetIssue = async (): Promise<Issue[]> => {
  const response = await instance.get('/repos/facebook/react/issues');
  return response.data.map((issue: any) => {
    return {
      id: issue.id,
      number: issue.number,
      title: issue.title,
      author: issue.user.login,
      date: issue.created_at,
      comments: issue.comments,
      image: issue.user.avatar_url,
      body: issue.body,
    };
  });
};

export { fetchGetIssue };
