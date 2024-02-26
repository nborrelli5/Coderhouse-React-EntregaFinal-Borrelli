import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [products,setProducts]= useState ([]);
    const {categoryId}=useParams();

    
    useEffect(()=> {
        const fetchData = async () => { 
            try{
                const response = await fetch('/products.json');
                const data = await response.json();
                
                if(categoryId){const filteredproducts = data.filter((p)=>p.category==categoryId)                
                setProducts(filteredproducts)
                }else{ 
                setProducts(data)
            }}
            catch(error){
                console.log("Mensaje Error: "+ error)
            }
        }
        fetchData()
    },[categoryId])
    
    return (
        <div>        
                <p className='mt-10 text-white font-bold text-4xl text-center'>{}</p>
                
                {products.length == 0 ?  <h2>Loading....</h2>:
                <ItemList productMap={products}/> 
                } 
            </div>
    )
}

export default ItemListContainer;