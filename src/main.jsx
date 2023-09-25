import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
{
  path: "/",
  element : <Root></Root>,
  errorElement: <Errorpage></Errorpage>,
  children :[
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('/items.json')
    },
    {
      path:"/donetion",
      element: <Donation></Donation>
    },
    {
      path:"/statistics",
      element:<Statistics></Statistics>
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
