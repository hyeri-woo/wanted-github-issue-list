import { fetchIssues } from '../../redux/slices/issueSlice';
import { AppDispatch, RootState } from '../../redux/store';
import AdCard from '../common/AdCard';
import Loading from '../common/Loading';
import IssueItem from './IssueItem';
import { useCallback, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function IssueList() {
  const { organization, repository } = useSelector((state: RootState) => state.option);
  const issues = useSelector((state: RootState) => state.issues);
  const dispatch = useDispatch<AppDispatch>();

  const initializeIssueData = useCallback(() => {
    dispatch(
      fetchIssues({
        organization: organization,
        repository: repository,
        page: issues.page,
      }),
    );
  }, [dispatch, issues.page, organization, repository]);

  const onScrollEvent = useCallback(() => {
    window.addEventListener('scroll', () => {
      if (
        Math.floor(window.scrollY + document.documentElement.clientHeight) ===
        Math.floor(document.documentElement.scrollHeight)
      ) {
        dispatch(
          fetchIssues({
            organization: organization,
            repository: repository,
            page: issues.page,
          }),
        );
      }
    });
  }, [dispatch, issues.page, organization, repository]);

  useLayoutEffect(() => {
    initializeIssueData();
    onScrollEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {issues.loading && <Loading />}
    </StyledIssueList>
  );
}

const StyledIssueList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 30px;
  max-width: 800px;
  margin: auto;
`;
