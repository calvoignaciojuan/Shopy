import { useShopyContext } from "../../Context";
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

const Card = (props) => {

    //Item added to Order
    const [addedToOrder,setAddedToOrder] = useState(false);

    const { incrementCount, decrementCount, openProductDetail, closeProductDetail, setProductInfo, myOrderItems, openMyOrder, closeMyOrder,  addItemToOrder, removeItemFromOrder } = useShopyContext();

    const asideProductDetail = (productData)=> {
        closeMyOrder();
        openProductDetail();
        setProductInfo(productData);
    }

    const asideMyOrderAddButton = (item)=>{
        closeProductDetail();
        openMyOrder();
        addItemToOrder(item);
    };

    const asideMyOrderRemoveButton = (event,idToDelete)=>{
        removeItemFromOrder(idToDelete);
        decrementCount(event);
    };

    const isAddedToCart = (id)=>{
        const result = myOrderItems.find( 
            (item)=>{
                return(item.id===id);
            });        
        return(result);
    };

    return(
        <div 
            className="bg-gray-100  h-56 w-48 rounded-lg m-2 cursor-pointer"
            onClick={()=>{asideProductDetail(props.data)}}>
            <figure className="relative w-full h-4/5">               
                <img 
                    className="object-cover  w-full h-full rounded-lg"
                    src={props.data.images[0]} alt={props.data.title} />
                <span className="absolute bottom-0 left-0 bg-white m-1 rounded-lg px-2 py-0.5 text-xs">{props.data.category.name}</span>
                <button 
                    className="absolute flex justify-center items-center top-0 right-0 w-6 h-6 bg-white m-1 rounded-full"
                    onClick={(event)=>{incrementCount(event)}}>
                    <PlusIcon 
                        className = {`${isAddedToCart(props.data.id) ? "hidden" : ""} h-6 w-6 text-black` }
                        onClick={()=>{asideMyOrderAddButton(props.data)}}/>
                    <CheckCircleIcon
                        className={`${isAddedToCart(props.data.id) ? "" : "hidden"} h-6 w-6 text-white bg-black rounded-full`}
                        onClick={(event)=>{asideMyOrderRemoveButton(event,props.data.id)}}/>
                </button>
            </figure>
            <p className="flex justify-between items-center mt-2 mx-1">
                <span className="text-sm font-light">{props.data.title}</span>
                <span className="text-lg font-medium">${props.data.price}</span>
            </p>
        </div>
    );

};

export default Card;