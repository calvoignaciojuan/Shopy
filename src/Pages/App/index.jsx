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

const AppRoutes = () =>{
    const routes = useRoutes([
        { path:"/",                           element: < Home/>},
        { path:"/my-account",                 element: < MyAccount/>},
        { path:"/my-orders",                  element: < MyOrders/>},
        { path:"/my-order/:id",               element: < MyOrder/>},
        { path:"/sign-in",                    element: < SignIn/>},
        { path:"/filter/:category",           element: < Home />},

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
    console.log('app');
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
