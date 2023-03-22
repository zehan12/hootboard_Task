import { Fragment, Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
// import Form from './pages/Form'
// import WeatherDetail from './pages/WeatherDetail';

import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';
import ErrorBoundary from './errorboundary/ErrorBoundary';
import { delayForDisplay } from './utils/helpers';

const Form = lazy(() => delayForDisplay(import("./pages/Form")));
const WeatherDetail = lazy(() => delayForDisplay(import("./pages/WeatherDetail")));




const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Suspense fallback={<div>Loading..</div>}>
        <Form />
      </Suspense >),
      errorElement: <ErrorBoundary />
    },
    {
      path: "/location/:cityName",
      element: (<Suspense fallback={<div>Loading..</div>}>
        <WeatherDetail />
      </Suspense >)
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





