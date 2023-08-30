import Header from '../components/common/Header';
import IssueList from '../components/issue/IssueList';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

export default function Issue() {
  const { organization, repository } = useSelector((state: RootState) => state.issues);
  return (
    <>
      <Header organization={organization} repository={repository} />
      <IssueList />
    </>
  );
}
