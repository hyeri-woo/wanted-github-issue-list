import { Issue } from '../../types';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  issue: Issue;
}

export default function IssueItem({ issue }: Props) {
  return (
    <StyledItem>
      <Link to={`/${issue.number}`}>
        <h2>
          <span className='issue-num'>#{issue.number}</span> {issue.title}
        </h2>
        <p>
          <span className='author'>{issue.author}</span>
          <span className='time'>{issue.date}</span>
          <span className='comment'>comment: {issue.comments}</span>
        </p>
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled.div``;
