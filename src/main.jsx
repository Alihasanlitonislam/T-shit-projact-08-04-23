import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './companent/Layout/Main';
import Home from './companent/Home/Home';
import Orders from './companent/Orders/Orders';
import About from './companent/About/About';
import Contact from './companent/Contact/Contact';
import Review from './companent/Review/Review';
import Ground from './contaxtAmdUseContaxt/Grounde/Ground';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tShits.json')
      },
      {
        path: 'order',
        element: <Orders/>
      },
      {
        path: 'review',
        element: <Review/>
      },
      {
        path: 'grandpa',
        element: <Ground/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
