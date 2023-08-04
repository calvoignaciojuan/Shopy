import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShopyContextProvider } from "../../Context"

import { Navbar } from "../../Components/Navbar"
import Home from "../Home"
import MyAccount from "../MyAccount"
import {MyOrder} from "../MyOrder"
import MyOrderAside from "../../Components/MyOrderAside"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Filter from "../Filter"

import './App.css'

const endPointDeploy = "/Shopy"

const AppRoutes = () =>{
    const routes = useRoutes([
        { path:"/Shopy/",                     element: < Home/>},
        { path:"/Shopy/my-account",                 element: < MyAccount/>},
        { path:"/Shopy/my-orders",                  element: < MyOrders/>},
        { path:"/Shopy/my-order/:id",               element: < MyOrder/>},
        { path:"/Shopy/sign-in",                    element: < SignIn/>},
        { path:"/Shopy/filter/:category",           element: < Home />},

        // { path:"/clothes",                    element: < Home/>},
        // { path:"/electronics",                element: < Home/>},        
        // { path:"/furniture",                 element: < Home/>},        
        // { path:"/toys",                       element: < Home/>},        
        // { path:"/others",                     element: < Home/>},        
        { path:"*",                           element:< NotFound/>},
    ]);
    return routes;
}

const App = ()=>{ 
  return (
    <ShopyContextProvider>
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>   
            <MyOrderAside/> 
        </BrowserRouter>       
    </ShopyContextProvider>        
  )
}

export default App
