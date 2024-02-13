import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product,setProduct]= useState ([]);

    const {id}=useParams();

    useEffect(()=> {
        const fetchData = async () => { 
            try{
                const response = await fetch('/products.json')
                const data = await response.json()
                const productShow = data.find((p)=>p.id==id)
                setProduct(productShow)
            }
            catch(error){
                console.log("Mensaje Error: "+ error)
            }
        }
        fetchData()
    },[])

    return (

        <div className='flex flex-col '>  
            <ItemDetail ProductMapDetail={product}/>
            <ItemCount stock="5" initial="1"/>                  
        </div>
    )
}

export default ItemDetailContainer