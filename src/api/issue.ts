import instance from './index';

const fetchGetIssue = async (): Promise<any> => {
  const response = await instance.get('/repos/facebook/react/issues');
  return response.data;
};

export { fetchGetIssue };
