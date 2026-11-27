import { createBrowserRouter, useRouteError } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import APOD from './pages/apod';
import Home from './pages/home';
import LandingPage from './pages/landing';

function RootErrorBoundary() {
  const error = useRouteError();
  console.error('Actual caught error:', error);
  return <div>Something went wrong! Check the console.</div>;
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingPage,
    errorElement: <RootErrorBoundary />,
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
