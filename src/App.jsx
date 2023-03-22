import { Fragment } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import WeatherDetail from './pages/WeatherDetail';

import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';
import ErrorBoundary from './errorboundary/ErrorBoundary';





const App = () => {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/location/:cityName",
      element: <WeatherDetail />
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





