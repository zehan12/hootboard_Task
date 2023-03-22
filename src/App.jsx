import { Fragment } from 'react'
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import WeatherDetail from './pages/WeatherDetail';

import { Toaster } from 'react-hot-toast';





const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path:"/location/:cityName",
      element: <WeatherDetail />
    },
    {
      path:"*",
      element: <h1>Page not found</h1>
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





