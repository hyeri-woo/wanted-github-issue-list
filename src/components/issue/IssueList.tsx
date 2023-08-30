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
      Math.floor(window.scrollY + document.documentElement.clientHeight) ===
      Math.floor(document.documentElement.scrollHeight)
    ) {
      dispatch(
        fetchIssues({
          organization: issues.organization,
          repository: issues.repository,
          page: issues.page,
        }),
      );
    }
  };

  useLayoutEffect(() => {
    dispatch(
      fetchIssues({
        organization: issues.organization,
        repository: issues.repository,
        page: issues.page,
      }),
    );
  }, []);

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
                <IssueItem issue={issue} children={''} />
              </li>
              {(index + 1) % 4 === 0 && (
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

const StyledIssueList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 30px 30px;
  max-width: 800px;
  margin: auto;
`;
