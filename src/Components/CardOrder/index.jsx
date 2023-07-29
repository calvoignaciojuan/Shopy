import { XCircleIcon } from '@heroicons/react/24/outline'
import { useShopyContext } from '../../Context';

const CardOrder = (props)=>{
    const { decrementCount, removeItemFromOrder } = useShopyContext();
    
    const {images:imagesUrl, title, price, id} = props.data;
  
    const deleteButton = (event,id)=>{
        decrementCount(event);
        removeItemFromOrder(id);
    };   

    return(
        <li className='flex gap-2 h-20  my-3 mx-2 justify-between items-center relative'>
            <picture className='w-24 h-24'>
                <img 
                    className='h-full w-full object-cover rounded-md'
                    src={imagesUrl?imagesUrl[0]:""} alt={title} />
            </picture>
            <p className='w-40'>{title}</p>
            <p className='font-bold'>${price}</p>
            <XCircleIcon 
                className='h-5 w-5 ml-2 right-0'
                onClick={(event)=>{deleteButton(event,id)}}
            />
        </li>
    );
};

export default CardOrder;