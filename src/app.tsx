import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import APOD from './apod';
import Home from './home';
import LandingPage from './landing';

const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingPage,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: ':date',
        Component: APOD,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
