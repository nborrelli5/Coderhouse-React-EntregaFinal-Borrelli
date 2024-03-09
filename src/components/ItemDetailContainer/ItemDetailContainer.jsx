import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product,setProduct]= useState ([]);

    const {id}=useParams();


    useEffect(()=> {

        const newDoc = doc (db,"products",id)

        getDoc (newDoc)
        .then (res =>{
            const data=res.data ()
            const newProduct = {id:res.id,...data}
            setProduct(newProduct)
        })
        .catch (error => console.log(error))


    },[])

    return (

        <div className='flex flex-col '>  
            <ItemDetail ProductMapDetail={product}/>
        </div>
    )
}

export default ItemDetailContainer