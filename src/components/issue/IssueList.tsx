import { fetchIssues } from '../../redux/issueSlice';
import { AppDispatch, RootState } from '../../redux/store';
import AdCard from '../common/AdCard';
import IssueItem from './IssueItem';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function IssueList() {
  const issues = useSelector((state: RootState) => state.issues);
  const dispatch = useDispatch<AppDispatch>();

  const onScrollLoadPage = () => {
    if (
      window.scrollY + document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      dispatch(fetchIssues(issues.count));
    }
  };

  useLayoutEffect(() => {
    dispatch(fetchIssues(issues.count));
  }, [dispatch, issues.count]);

  useEffect(() => {
    window.addEventListener('scroll', onScrollLoadPage);
    return () => {
      window.removeEventListener('scroll', onScrollLoadPage);
    };
  }, [issues, dispatch]);

  return (
    <StyledIssueList>
      {issues.value.length > 0 &&
        issues.value.map((issue, index) => {
          return (
            <>
              <li key={issue.id}>
                <IssueItem issue={issue} />
              </li>
              {(index + 1) % 5 === 0 && (
                <li>
                  <AdCard />
                </li>
              )}
            </>
          );
        })}
    </StyledIssueList>
  );
}

const StyledIssueList = styled.ul``;
