import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../components/Error";
import Home from "../Pages/Home";
import AllCamp from "../Pages/AllCamp";
import NewCamp from "../Pages/NewCamp";


import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details";
import UpdateCamp from "../components/UpdateCamp";
import MyDonations from "../Pages/MyDonations";
import MyCampaign from "../Pages/MyCampaign";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('https://assignment10-server-ten.vercel.app/newcamp6')
        },
        {
            path:'/allCamp',
            element:<AllCamp></AllCamp>,
            loader: ()=> fetch('https://assignment10-server-ten.vercel.app/newcamp')
        },
        {
            path:'/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=> fetch(`https://assignment10-server-ten.vercel.app/allCamp/${params.id}`)
        },
        {
            path:'/newCamp',
            element:<PrivateRoute><NewCamp></NewCamp></PrivateRoute>
        },
        
        {
            path:'/myDonation',
            element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
           
            
        },
        
        {
            path:'/updateCampaign/:id',
            element:<PrivateRoute><UpdateCamp></UpdateCamp></PrivateRoute>,
            loader:({params})=> fetch(`https://assignment10-server-ten.vercel.app/allCamp/${params.id}`)
            
        },
        {
            path:'/myCamp',
            element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
            
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