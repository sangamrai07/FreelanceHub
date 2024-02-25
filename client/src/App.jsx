import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; // Import createBrowserRouter and RouterProvider
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()   // React Query Client

import Navbar from './assets/Navbar';
import Home from './components/Pages/Home';
import AddGigs from './components/Pages/AddGigs';
import AllChat from './components/Pages/AllChat';
import Gigs from './components/Pages/Gigs';
import MyGigs from './components/Pages/MyGigs';
import Order from './components/Pages/Order';
import Chat from './components/Pages/Chat'
import "./app.scss"
import Signup from './components/Pages/Signup'
import Login from './components/Pages/Login';
import SingleGig from './assets/SingleGig';


function App() {
  const LayOut = () => {
    return (
      <>
            <QueryClientProvider client={queryClient}>
      <Navbar />
        <Outlet />
    </QueryClientProvider>      
      </>
    );
  };

  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayOut />, // Wrap LayOut component with JSX syntax
      children: [
        {
          path: '/',
          element: <Home />,
        },
         {
          path: '/addGigs',
          element: <AddGigs />,
        },
          {
          path: '/allChat',
          element: <AllChat />,
        },
        {
          path: '/singleChat/123',
          element: <Chat/>,
        },
           {
          path: '/gigs',
          element: <Gigs />,
        },
            {
          path: '/myGigs',
          element: < MyGigs/>,
        },
                  {
          path: '/orders',
          element: <Order />,
        },
                                    {
          path: '/singleGig/:id',
          element: <SingleGig />,
        }, 
        {
          path: '/Signup',
          element: <Signup />,
        },   
                {
          path: '/login',
          element: <Login />,
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


