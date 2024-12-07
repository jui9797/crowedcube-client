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
            loader:()=> fetch('http://localhost:5000/newcamp6')
        },
        {
            path:'/allCamp',
            element:<AllCamp></AllCamp>,
            loader: ()=> fetch('http://localhost:5000/newcamp')
        },
        {
            path:'/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/allCamp/${params.id}`)
        },
        {
            path:'/newCamp',
            element:<PrivateRoute><NewCamp></NewCamp></PrivateRoute>
        },
        
        {
            path:'/myDonation/:email',
            element:<PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/allDonation/${params.email}`)
            
        },
        // {
        //     path:'/allDonation/:id',
        //     element:<PrivateRoute><DonationCard></DonationCard></PrivateRoute>,
        //     loader:({params})=> fetch(`http://localhost:5000/allDonation/${params.id}`)
        // },
        {
            path:'/updateCampaign/:id',
            element:<PrivateRoute><UpdateCamp></UpdateCamp></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/allCamp/${params.id}`)
            
        },
        {
            path:'/myCamp/:email',
            element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/myCampaign/${params.email}`)
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