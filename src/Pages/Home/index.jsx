import { Layout } from "../../Components/Layout"
import Card from "../../Components/Card";
import { useEffect, useState } from "react";
import apiUrl from "../../api"

function Home() {
    
    const [items,setItems] = useState(null);

    useEffect( () => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${apiUrl}/products`);            
                const data = await response.json();             
                setItems(data);
            } catch (error) {
                console.error(`Ocurrió un error: ${error}`);
            }            
        };
        fetchData();
    },[]);
    
    return (
        
        <Layout>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {
                    items?.map( item => {
                        return(<Card key={item.id} data={item}/>);
                    })        
                }
            </div>
        </Layout>    
    );
  }
  
  export default Home

