import Detail from '../pages/Detail';
import Issue from '../pages/Issue';
import NotFound from '../pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Issue />,
    errorElement: <NotFound />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
]);

export default router;
