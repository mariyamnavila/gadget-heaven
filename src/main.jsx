import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Stats from './Component/Stats/Stats.jsx';
import GadgetDetails from './Component/GadgetDetails/GadgetDetails.jsx';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import AboutUs from './Component/AboutUs/AboutUs.jsx';
import ErrorPage from './Component/Errorpage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/gadget/:gadgetId',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/stats',
        element: <Stats></Stats>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>,
        loader: () => fetch('/brand.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
