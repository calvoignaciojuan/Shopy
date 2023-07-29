import { ChevronRightIcon } from '@heroicons/react/24/outline'

const OrdersCard = (props)=>{
    
    const {date, totalProducts, price} = props;
    
    return(
        
        <li className='flex items-center gap-2 border rounded-md border-black w-full h-20 my-2'>
            <div className='flex flex-1 flex-col text-sm mx-2'>
                <span>{date}</span>
                <span>{totalProducts} articles</span>
            </div>         
            <div className='flex flex-1 justify-end items-center'>
                <span className='font-bold text-lg'>${price}</span>
                <ChevronRightIcon className='h-6 w-6'/>
            </div>
        </li>
    );
};

export default OrdersCard;