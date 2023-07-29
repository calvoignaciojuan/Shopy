import { Link } from 'react-router-dom';

import { XCircleIcon } from '@heroicons/react/24/outline'
import { useShopyContext } from '../../Context';
import {totalPrice} from '../../utils'

import CardOrder from '../CardOrder'



const MyOrderAside = () => {

    const { setCount, isMyOrderOpen, closeMyOrder, openMyOrder,myOrderItems,setMyOrderItems,ordersArray, setOrdersArray  } = useShopyContext();

    const addOrder = () => {

        const actualOrder = {
            date:"01-02-23",
            products: myOrderItems,
            totalProducts: myOrderItems.length,
            totalPrice: totalPrice(myOrderItems)
        };

        setOrdersArray([...ordersArray , actualOrder]);
        setMyOrderItems([]);
        setCount(0);
        closeMyOrder();
    };

    return(
        <aside className = {`${isMyOrderOpen?"flex":"hidden"} flex-col w-[360px] h-[calc(100vh-68px)] top-[68px] bg-white fixed right-0 border border-black rounded-md`}>           
            <div className='flex justify-between'>
                <h2 className='text-lg text-black-60 m-3'>
                    My Order
                </h2>
                <XCircleIcon 
                    className='h-8 w-8 m-2 cursor-pointer'
                    onClick={closeMyOrder}/>
            </div>
            <ul className='flex flex-col  flex-1 overflow-y-auto'>
                {myOrderItems?.map( (item) =>{                        
                    return(
                    <CardOrder 
                        key={item.id} 
                        data={item}
                    />);                        
                })}
            </ul>
            <div className='mb-4 w-full'>
                <div className='flex justify-between items-center  p-4 border-t-2  border-b-2 my-4'>
                    <p className='text-xl  font-bold'>Total:</p>
                    <p className='text-lg  font-bold'>$ {totalPrice(myOrderItems)}</p>                
                </div>  
                <Link to={`/my-order/${ordersArray.length}`} className='flex'>
                    <button 
                        className='bg-black w-full rounded-md mx-4 h-10 text-white'
                        onClick={addOrder}>
                        checkout
                    </button>                
                </Link>          
            </div>         
        </aside>
    );
};

export default MyOrderAside;