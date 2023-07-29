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

import './App.css'

const AppRoutes = () =>{
    const routes = useRoutes([
        { path:"/",              element:< Home/>},
        { path:"/my-account",    element:< MyAccount/>},
        { path:"/my-order/:id",      element:< MyOrder/>},
        { path:"/my-orders",     element:< MyOrders/>},
        { path:"/sign-in",       element:< SignIn/>},
        { path:"*",              element:< NotFound/>},
    ]);
    return routes;
}

const App = ()=>{ 
  return (
    <ShopyContextProvider>
        <BrowserRouter>
            <AppRoutes/>   
            <Navbar/>
            <MyOrderAside/> 
        </BrowserRouter>       
    </ShopyContextProvider>        
  )
}

export default App
