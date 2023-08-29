import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function IssueItem() {
  return (
    <StyledItem>
      <Link to='/'>
        <h2>
          <span className='issue-num'>#111</span> issue title
        </h2>
        <p>
          <span className='author'>author</span>
          <time dateTime=''>time</time>
          <span className='comment'>comment: 67</span>
        </p>
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled.div``;
