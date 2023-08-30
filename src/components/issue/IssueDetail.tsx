import { RootState } from '../../redux/store';
import IssueItem from './IssueItem';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function IssueDetail() {
  const { number } = useParams();
  const navigate = useNavigate();
  const issue = useSelector((state: RootState) =>
    state.issues.value.find(issue => issue.number.toString() === number),
  );

  useEffect(() => {
    if (isNaN(Number(number))) {
      navigate('/error');
    }
  }, [number, navigate]);

  return (
    <StyledDetail>
      {issue && (
        <IssueItem issue={issue}>
          <ReactMarkdown>{issue?.body || 'no contents'}</ReactMarkdown>
        </IssueItem>
      )}
    </StyledDetail>
  );
}

const StyledDetail = styled.main`
  padding: 100px 30px;
  max-width: 800px;
  margin: auto;
`;
