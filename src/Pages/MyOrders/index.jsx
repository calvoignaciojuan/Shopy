import { Layout } from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { useShopyContext } from '../../Context';
import { Link } from "react-router-dom";


function MyOrders() {

    const { ordersArray } = useShopyContext();


    return (
        <Layout>
            <h2 className="mb-2 font-bold">MyOrders</h2> 
            {
                ordersArray?.map( (order,index) => {
                    return(
                        <ul className="w-[300px] ">
                            <Link to={`/my-order/${index}`}>
                                <OrdersCard 
                                    date = {order.date}
                                    totalProducts = {order.totalProducts}
                                    price = {order.totalPrice}
                                />                            
                            </Link>
                        </ul>               
                    )
                })
            }
        </Layout>   
    )
  }
  
  export default MyOrders