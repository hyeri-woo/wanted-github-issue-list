import { fetchIssues } from '../../redux/issueSlice';
import { AppDispatch, RootState } from '../../redux/store';
import IssueItem from './IssueItem';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function IssueList() {
  const issues = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  useLayoutEffect(() => {
    dispatch(fetchIssues());
  }, [dispatch]);
  return (
    <StyledIssueList>
      {issues.issues.value.length > 0 &&
        issues.issues.value.map(issue => {
          return (
            <li>
              <IssueItem issue={issue} />
            </li>
          );
        })}
    </StyledIssueList>
  );
}

const StyledIssueList = styled.ul``;
