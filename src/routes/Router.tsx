import Issue from '../pages/Issue';
import NotFound from '../pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Issue />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}
