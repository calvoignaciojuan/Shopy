
import { createContext , useContext, useState } from "react";

const shopyContext = createContext();

const ShopyContextProvider = ({children}) => {

    // cart counter
    const [count, setCount] = useState(0);
    const incrementCount = (event) =>{
        event.stopPropagation();
        setCount(count+1);
    }

    //aside show - on/off
    const [asideState, setAsideState] = useState(false);    
    const isAsideOpen = () => { return(asideState);};
    const openAside = () => { return(setAsideState(true));};
    const closeAside = () => { return(setAsideState(false));};

    //product detal info
    const[productInfo,setProductInfo] = useState({});
    // title:"",
    // price:0,
    // category:"",
    // image:""
    return(
        <shopyContext.Provider value={{
            count,
            setCount,
            incrementCount,
            isAsideOpen,
            openAside,
            closeAside,
            productInfo,
            setProductInfo
        }}>
            {children}
        </shopyContext.Provider>                         
    );   
};

const useShopyContext = () => {
    return(useContext(shopyContext));
}

export { useShopyContext , ShopyContextProvider};