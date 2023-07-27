import { XCircleIcon } from '@heroicons/react/24/outline'
import "./style.css";
import { useShopyContext } from '../../Context';

const ProductDetail = () => {

    const {closeAside,productInfo } = useShopyContext();

    return(
        <aside className= "productDetail flex flex-col bg-white fixed right-0 border border-black rounded-md">
            <div className='flex justify-between'>
                <h2 className='text-lg text-black-60 m-3'>
                    Details
                </h2>
                <XCircleIcon 
                    className='h-8 w-8 m-2 cursor-pointer'
                    onClick={closeAside}
                />
            </div>
            <figure className='flex justify-center'>
                <img
                    className='h-full rounded-lg w-[96%] ' 
                    src={productInfo.images?productInfo.images[0]:""} alt={productInfo.title}  
                />
            </figure>
            <p className='flex flex-col'>
                <div className='flex justify-between items-center mx-2 my-4'>
                    <span className='text-xl'>{productInfo.title}</span>
                    <span className='font-bold text-2xl'>${productInfo.price}</span>                
                </div>
                
                <span className='mx-2 font-light'>{productInfo.description}</span>
            </p>
            
        </aside>
    );
};

export default ProductDetail;