import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home/Home';
import Statistics from './pages/Statistics/Statistics';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import Blog from './pages/Blog/Blog';
import JobDetails from './pages/JobDetails/JobDetails';
import AllJobs from './components/AllJobs/AllJobs';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "/applied-jobs",
    element: <AppliedJobs></AppliedJobs>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/job/:id",
    element: <JobDetails></JobDetails>,
  },
  {
    path: "/jobs",
    element: <AllJobs></AllJobs>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
