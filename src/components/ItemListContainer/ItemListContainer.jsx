import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection,getDocs,query,where} from 'firebase/firestore';

const ItemListContainer = () => {

    const [products,setProducts]= useState ([]);
    const {categoryId}=useParams();
    
    useEffect(()=> {


        const productsList = 
        categoryId ? 
        query(collection(db,"products"),where("category","==",categoryId))
        :
        collection(db,"products")

        getDocs(productsList)
        .then((res) => {
            const newProductsList = res.docs.map((doc) => {
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProducts(newProductsList)
        })
        .catch((error) => console.log(error))

    },[categoryId])
    
    return (
        <div>        
                <p className='mt-10 text-white font-bold text-4xl text-center'>{}</p>
                
                {products.length == 0 
                ?  
                <h2 className='text-white text-4xl text-center'>Loading....</h2>
                :
                <ItemList productMap={products}/> 
                } 
            </div>
    )
}

export default ItemListContainer;