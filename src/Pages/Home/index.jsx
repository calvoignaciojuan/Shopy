import { useEffect } from 'react';
import { useShopyContext } from "../../Context";
import { useParams } from "react-router-dom";

import { Layout } from "../../Components/Layout"
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {

    const { items, isAsideOpen, searchText, setSearchText, setCategoryTextFilter, categoryTextFilter, filteredProducts } = useShopyContext();
    const params = useParams();    
    
    useEffect( () =>{        
        const categoryParamsFilter = params.category;
        // console.log('categoryParamsFilter',categoryParamsFilter);
        if( categoryParamsFilter && (categoryTextFilter != categoryParamsFilter)){
            setCategoryTextFilter(categoryParamsFilter);
        }         
    });

    const renderProducts = () => {

        let itemsToRender = null;

        if(!searchText && !categoryTextFilter){
            itemsToRender = items;
        }else{
            itemsToRender = filteredProducts;
            if(itemsToRender?.length > 0){
                itemsToRender = filteredProducts;
            }else{
                return(
                  <p>no results were found</p>
                );
            }
        }        

        return(
            itemsToRender?.map( (item,index) => {
                return(<Card key={index} data={item}/>);
            }) 
        );      

    }
    const changeHandler = (event)=>{
        setSearchText(null);
        setSearchText(event.target.value);
    };

    return (        
        <Layout>
            <div className="flex justify-center items-center flex-col w-[300px] mb-4">
                <h1 className="font-bold text-lg">Exclusive Products</h1>
                <input 
                    type="text" 
                    placeholder="Search a product"
                    value={searchText}
                    className="h-12 w-full p-2 mt-2 border border-black rounded-lg"
                    onChange={(event) => {changeHandler(event)}}
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
  
  export default Home

