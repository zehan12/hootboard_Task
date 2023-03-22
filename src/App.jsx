// External 
import { Fragment, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Internals
import './App.css'
import NotFound from './pages/NotFound';
import ErrorBoundary from './errorboundary/ErrorBoundary';
import { delayForDisplay } from './utils/helpers';
import Skeleton from './components/Skeleton';

// lazy
const Form = lazy(() => delayForDisplay(import("./pages/Form")));
const WeatherDetail = lazy(() => delayForDisplay(import("./pages/WeatherDetail")));


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Suspense fallback={<Skeleton />}>
        <Form />
      </Suspense>),
      errorElement: <ErrorBoundary />
    },
    {
      path: "/location/:cityName",
      element: (<Suspense fallback={<Skeleton />}>
        <WeatherDetail />
      </Suspense >),
      errorElement: <ErrorBoundary />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (<Fragment>
    <div className='container flex items-center justify-center h-[90vh]'>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  </Fragment>)
}

export default App





