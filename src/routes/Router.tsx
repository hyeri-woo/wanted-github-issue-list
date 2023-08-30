import Detail from '../pages/Detail';
import Issue from '../pages/Issue';
import NotFound from '../pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/issue',
    element: <Issue />,
    errorElement: <NotFound />,
  },
  {
    path: '/issue/:number',
    element: <Detail />,
  },
]);

export default router;
