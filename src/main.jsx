import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },

      {
        path:"checkout/:id",
        element:<Checkout></Checkout>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      }
    ],


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-5xl mx-auto'>
   <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
 </div>
)
