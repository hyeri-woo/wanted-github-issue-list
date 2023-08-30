// import IssueItem from './IssueItem';
// import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function IssueDetail() {
  const { number } = useParams();
  const issues = useSelector((state: RootState) => state.issues);
  console.log(number);
  return <>{/* <IssueItem /> */}</>;
}
