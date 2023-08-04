
import { createContext , useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiUrl from "../api";

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

    // Items(products) fetch API        
    const [items,setItems] = useState(null);

    useEffect( () => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${apiUrl}/products`);            
                const data = await response.json();             
                setItems(data);
            } catch (error) {
                console.error(`Ocurrió un error: ${error}`);
            }            
        };
        fetchData();
    },[]);

    //searchText, to filter products
    const[searchText, setSearchText ] = useState('');
 
    //categoryFilter
    // const params = useParams();
    // const categoryParamsFilter = params.category;
    const[categoryTextFilter, setCategoryTextFilter ] = useState(null);

    //filteredProducts
    const[filteredProducts,setFilteredProducts] = useState([]);
    
    useEffect(()=>{

        let itemsFiltered = items;
        if(searchText){
            itemsFiltered = items?.filter( (product) => {
                return( product.title.toLowerCase().includes(searchText.toLowerCase()));
            }); 
        }
        if(categoryTextFilter){
            itemsFiltered = itemsFiltered?.filter( (product) => {
                return( product.category.name.toLowerCase() === (categoryTextFilter.toLowerCase()));
            }); 
        }  
        if(searchText || categoryTextFilter){
            setFilteredProducts(itemsFiltered);
        }
    
    },[items,searchText,categoryTextFilter]);
  
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
            setOrdersArray,
            items,
            setItems,
            searchText, 
            setSearchText,
            filteredProducts,
            categoryTextFilter,
            setCategoryTextFilter
        }}>
        
            {children}
        </shopyContext.Provider>                         
    );   
};

const useShopyContext = () => {
    return(useContext(shopyContext));
}

export { useShopyContext , ShopyContextProvider};