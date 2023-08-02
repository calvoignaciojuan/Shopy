import { useShopyContext } from "../../Context";
import { useParams } from "react-router-dom";


import { Layout } from "../../Components/Layout"
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Filter() {

    const { items, isAsideOpen, searchText, setSearchText, filteredProducts, setCategoryTextFilter } = useShopyContext();

    const renderProducts = () => {

        // const params = useParams();
        // const textToFilter = params.textToFilter;
        // if(textToFilter){
        //     setCategoryTextFilter(textToFilter);    
        // }  
        // console.log(searchText);

        let itemsToRender = items;
        if (textToFilter?.length > 0 ){   
            if(filteredProducts?.length == 0 ){
                return(
                    <p>no results were found</p>
                );
            }else{
                itemsToRender = filteredProducts;
            }
        }

        return(
            itemsToRender?.map( (item,index) => {
                return(<Card key={index} data={item}/>);
            }) 
        );       
    }

    return (        
        <Layout>
            <div className="flex justify-center items-center flex-col w-[300px] mb-4">
                <h1 className="font-bold text-lg">Exclusive Products</h1>
                <input 
                    type="text" 
                    placeholder="Search a product"
                    className="h-12 w-full p-2 mt-2 border border-black rounded-lg"
                    onChange={(event) => {setSearchText(event.target.value);}}
                />
            </div>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {
                    renderProducts()      
                }
            </div>
            {isAsideOpen() && <ProductDetail/>}          
        </Layout>    
    );  
  }
  
  export default Filter

