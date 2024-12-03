import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../components/Error";
import Home from "../Pages/Home";
import AllCamp from "../Pages/AllCamp";
import NewCamp from "../Pages/NewCamp";
import MyCamp from "../Pages/MyCamp";
import MyDonation from "../Pages/MyDonation";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allCamp',
            element:<AllCamp></AllCamp>
        },
        {
            path:'/newCamp',
            element:<PrivateRoute><NewCamp></NewCamp></PrivateRoute>
        },
        {
            path:'/myCamp',
            element:<PrivateRoute><MyCamp></MyCamp></PrivateRoute>
        },
        {
            path:'/myDonation',
            element:<PrivateRoute><MyDonation></MyDonation></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;