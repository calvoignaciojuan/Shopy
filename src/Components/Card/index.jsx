import { useShopyContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/outline'

const Card = (props) => {

    const { incrementCount, isAsideOpen, openAside, closeAside, productInfo, setProductInfo } = useShopyContext();

    const asideInfo = (productData)=> {
        // isAsideOpen() ? closeAside() : openAside();
        openAside();
        setProductInfo(productData);
    }

    return(
        <div 
            className="bg-gray-100  h-56 w-48 rounded-lg m-2 cursor-pointer"
            onClick={()=>{asideInfo(props.data)}}
            >
            <figure className="relative w-full h-4/5">               
                <img 
                    className="object-cover  w-full h-full rounded-lg"
                    src={props.data.images[0]} alt={props.data.title}                   
                />
                <span className="absolute bottom-0 left-0 bg-white m-1 rounded-lg px-2 py-0.5 text-xs">{props.data.category.name}</span>
                <span 
                    className="absolute flex justify-center items-center top-0 right-0 w-6 h-6 bg-white m-1 rounded-full"
                    onClick={(event)=>{incrementCount(event)}}
                >
                    <PlusIcon className="h-6 w-6 text-black"/>
                </span>
            </figure>
            <p className="flex justify-between items-center mt-2 mx-1">
                <span className="text-sm font-light">{props.data.title}</span>
                <span className="text-lg font-medium">${props.data.price}</span>
            </p>
        </div>
    );

};

export default Card;