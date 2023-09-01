import { fetchIssueDetail } from '../../redux/slices/detailSlice';
import { AppDispatch, RootState } from '../../redux/store';
import Loading from '../common/Loading';
import IssueItem from './IssueItem';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function IssueDetail() {
  const { number } = useParams();
  const navigate = useNavigate();
  const { organization, repository } = useSelector((state: RootState) => state.option);
  const issue = useSelector((state: RootState) => state.detail);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      fetchIssueDetail({
        organization: organization,
        repository: repository,
        number: number || '',
      }),
    );
  }, [dispatch, organization, repository, number]);

  useEffect(() => {
    if (isNaN(Number(number))) {
      navigate('/error');
    }
  }, [navigate, number]);

  if (!issue.loading && issue.error) {
    navigate('/error');
  }

  return (
    <StyledDetail>
      {issue.loading && <Loading />}
      {!issue.loading && !issue.error && (
        <IssueItem issue={issue.value}>
          <ReactMarkdown children={issue.value?.body} />
          {issue.value?.body || 'no contents'}
        </IssueItem>
      )}
    </StyledDetail>
  );
}

const StyledDetail = styled.main`
  padding: 100px 30px;
  max-width: 800px;
  margin: auto;
  word-break: break-word;
  pre {
    white-space: pre-wrap;
  }
`;
