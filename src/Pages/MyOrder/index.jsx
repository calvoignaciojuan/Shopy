import { Layout } from "../../Components/Layout";
import { useShopyContext  } from "../../Context";


const MyOrder = ()=> {
    
    const { ordersArray, setOrdersArray, openMyOrder  } = useShopyContext();
    openMyOrder();

    return (
        <Layout>
            <div>
                <ul className='flex flex-col overflow-y-auto'>
                    {ordersArray?.map( (item) =>{                        
                        return(
                        <CardOrder 
                            key={item.id} 
                            data={item}
                        />);                        
                    })}
                </ul>
            </div>
        </Layout>   
    );
};

export {MyOrder};