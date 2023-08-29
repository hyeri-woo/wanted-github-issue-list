import { fetchGetIssue } from '../api/issue';
import React, { useEffect, useState } from 'react';

export default function Issue() {
  const [issue, setIssue] = useState<any>([]);
  useEffect(() => {
    setIssue(fetchGetIssue());
  }, []);

  useEffect(() => {
    console.log(issue);
  }, [issue]);

  return <div>Issue</div>;
}
