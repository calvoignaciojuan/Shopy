import { Link } from "react-router-dom";
import {  useParams } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { useShopyContext  } from "../../Context";
import CardOrder from "../../Components/CardOrder"

import { totalPrice } from "../../utils";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const MyOrder = ()=> {
    
    const { ordersArray, setOrdersArray, openMyOrder  } = useShopyContext();

    const params = useParams();
    console.log(params);    
    const indexOrderPath = Number(params.id);
    console.log(indexOrderPath);

    const orderToShow = ordersArray[indexOrderPath];
    console.log(orderToShow);

    return (
        <Layout>
            <div className="w-[336px]">
                <div className="flex justify-center items-center mb-4">
                    <Link to = "/my-orders">
                        <ArrowUturnLeftIcon className="ml-3 w-6 h-6"/>
                    </Link>                
                    <h2 className="flex-1 font-bold text-lg ml-20">My Order</h2>
                </div>
                <ul className='flex flex-col overflow-y-auto'>
                    {orderToShow.products?.map( (item) =>{                        
                        return(
                        <CardOrder 
                            key={item.id} 
                            data={item}
                            deleteDisable = {true}
                        />);                        
                    })}
                </ul>
                <div className='flex justify-between items-center  p-4 border-t-2  border-b-2 my-4'>
                    <p className='text-xl  font-bold'>Total:</p>
                    <p className='text-lg  font-bold'>$ {orderToShow.totalPrice}</p>                
                </div>  
            </div>
        </Layout>   
    );
};

export {MyOrder};