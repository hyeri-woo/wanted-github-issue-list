import { RootState } from '../../redux/store';
import IssueItem from './IssueItem';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function IssueDetail() {
  const { number } = useParams();
  const issue = useSelector((state: RootState) =>
    state.issues.value.find(issue => issue.number.toString() === number),
  );
  return (
    <>
      <img src={issue?.image} alt='' />
      {issue && <IssueItem issue={issue} />}
      <ReactMarkdown>{issue?.body || 'no contents'}</ReactMarkdown>
    </>
  );
}
