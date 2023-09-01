import { Issue } from '../types';
import instance from './index';

const fetchGetIssue = async (
  organization: string,
  repository: string,
  page: number = 1,
): Promise<Issue[]> => {
  const response = await instance.get(`/repos/${organization}/${repository}/issues`, {
    params: {
      sort: 'comments',
      page: page,
      per_page: 10,
    },
  });
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

const fetchGetIssueDetail = async (
  organization: string,
  repository: string,
  number: string,
): Promise<Issue> => {
  const response = (await instance.get(`/repos/${organization}/${repository}/issues/${number}`))
    .data;
  return {
    id: response.id,
    number: response.number,
    author: response.user.login,
    date: response.created_at,
    title: response.title,
    comments: response.comments,
    image: response.user.avatar_url,
    body: response.body,
  };
};

export { fetchGetIssue, fetchGetIssueDetail };
