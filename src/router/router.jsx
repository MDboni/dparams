import { createBrowserRouter, Navigate,  } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Middle from "../Components/Middle";
import DetailsPage from "../Pages/DetailsPage";
import Login from "../Components/Login";
import Register from "../Components/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    children:[
       {
        index: true, 
        element: <Navigate to="/category/01" replace />,
      },
      {
        path:'/category/:id',
        element: <Middle/>
      },

    ]
  },
  {
    path:'/detail/:id',
    element: <DetailsPage/>
  },
  {
    path: "/about",
    element: <div>Hello world!</div>,
  },
  {
    path: "/carear",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

export default router