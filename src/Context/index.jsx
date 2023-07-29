
import { createContext , useContext, useState } from "react";

const shopyContext = createContext();

const ShopyContextProvider = ({children}) => {

    // cart counter
    const [count, setCount] = useState(0);
    const incrementCount = (event) =>{
        event.stopPropagation();
        setCount(count+1);
    };
    const decrementCount = (event) =>{
        event.stopPropagation();
        setCount(count-1);
    };

    //aside detail show - on/off
    const [asideState, setAsideState] = useState(false);    
    const isAsideOpen = () => { return(asideState);};
    const openProductDetail = () => { setAsideState(true)};
    const closeProductDetail = () => { setAsideState(false)};

    //product detail info
    const[productInfo,setProductInfo] = useState({});

    //My OrderAside - on/off
    const[isMyOrderOpen,setIsMyOrderOpen] = useState(false);
    const closeMyOrder = () =>{setIsMyOrderOpen(false)};
    const openMyOrder = () =>{setIsMyOrderOpen(true)};

    // My Order List
    const[myOrderItems,setMyOrderItems] = useState([]);

    const addItemToOrder = (item) => {
        setMyOrderItems( [...myOrderItems , item] );
    };
    const removeItemFromOrder = (idToDelete) => {
        
        const indexItem = myOrderItems.findIndex( object => {
            return(object.id === idToDelete);
        }); 
        myOrderItems.splice(indexItem,1);
        setMyOrderItems(myOrderItems);
    };

    // Orders (list of orders)
    const [ordersArray, setOrdersArray] = useState([]);



    return(
        <shopyContext.Provider value={{
            count,
            setCount,
            incrementCount,
            decrementCount,
            isAsideOpen,
            openProductDetail,
            closeProductDetail,
            productInfo,
            setProductInfo,
            isMyOrderOpen,
            closeMyOrder,
            openMyOrder,
            myOrderItems,
            setMyOrderItems,
            addItemToOrder,
            removeItemFromOrder,
            ordersArray, 
            setOrdersArray
        }}>
        
            {children}
        </shopyContext.Provider>                         
    );   
};

const useShopyContext = () => {
    return(useContext(shopyContext));
}

export { useShopyContext , ShopyContextProvider};