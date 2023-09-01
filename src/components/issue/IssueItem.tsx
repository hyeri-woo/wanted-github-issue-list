import { Issue } from '../../types';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  issue: Issue;
  children: ReactNode;
}

export default function IssueItem({ issue, children }: Props) {
  return (
    <StyledItem isDetail={children === ''}>
      <Link to={`/${issue.number}`}>
        <h2>
          <span className='issue-num'>#{issue.number}</span> {issue.title}
        </h2>
        <p className='header-info'>
          <span className='author'>
            {children !== '' && <img src={issue.image} alt='' />}
            {children === '' && '작성자: '}
            {issue.author}
          </span>
          <span className='time'>
            작성일: {issue.date.slice(0, 10)} {issue.date.slice(11, 19)}
          </span>
          <span className='comment'>댓글: {issue.comments}</span>
        </p>
        {children !== '' && <p className='body-content'>{children}</p>}
      </Link>
    </StyledItem>
  );
}

interface StyledItemDetail {
  isDetail?: boolean;
}

const StyledItem = styled.div<StyledItemDetail>`
  padding: 20px;
  background: var(--color-white20);
  border-radius: 30px;
  border: 1px solid var(--color-white70);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background: ${props => props.isDetail && 'var(--color-white30)'};
  }
  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
    .issue-num {
      display: inline-block;
      padding: 5px;
      border-radius: 20px;
      background: white;
      font-size: 18px;
      color: var(--color-green);
      margin-right: 15px;
    }
  }
  p.header-info {
    display: flex;
    padding: 10px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 40px;
      border-radius: 50%;
      margin-right: 10px;
      border: 1px solid white;
    }
  }
  p.body-content {
    border-top: 1px solid white;
    padding: 30px;
    line-height: 30px;
  }
`;
