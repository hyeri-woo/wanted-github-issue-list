import Header from '../components/common/Header';
import IssueDetail from '../components/issue/IssueDetail';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

export default function Detail() {
  const { organization, repository } = useSelector((state: RootState) => state.issues);
  return (
    <>
      <Header organization={organization} repository={repository} />
      <IssueDetail />
    </>
  );
}
