import Detail from '../pages/Detail';
import Issue from '../pages/Issue';
import NotFound from '../pages/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Issue />} />
      <Route path='/:number' element={<Detail />} />
      <Route path='/*' element={<Navigate to='/error' />} />
      <Route path='/error' element={<NotFound />} />
    </Routes>
  );
}
