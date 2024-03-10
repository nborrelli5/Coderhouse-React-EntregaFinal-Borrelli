import React, {useState,useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'


const ItemDetail = ({ProductMapDetail}) => {
    
    const [cart,setCart] = useState(false);

    const {addToCart} = useContext(CartContext);

    const onAdd = (count) => {

        setCart(true);
        
        addToCart(ProductMapDetail,count);

    }

    return (
        <>
            <div key={ProductMapDetail.id} className='flex flex-col bg-neutral-900 text-neutral-300'>
                <h4 className='my-1 mx-auto text-3xl font-bold text-center'>{ProductMapDetail.title}</h4>
                <div className='flex justify-center'>
                    <div className='h-96 p-2 flex justify-center ' >
                        <img src={ProductMapDetail.img} className='object-contain border-2 border-neutral-700'></img>                    
                    </div>
                    <div className='flex flex-col ml-10 justify-center'>
                            <h4 className='my-1 text-3xl font-bold text-purple-500'>$ {ProductMapDetail.price}</h4>
                            <p className='my-2 text-sm'>{ProductMapDetail.description}</p>
                            <h4 className='my-1 max-w-sm text-sm'>Tags: {ProductMapDetail.tags}</h4>
                            <h4 className='my-1 text-lg'>Category: {ProductMapDetail.category}</h4>
                            <h4 className='my-1 text-md'>Score: {ProductMapDetail.rate}</h4>
                            <h4 className='my-1 text-md'>Code: {ProductMapDetail.code}</h4>
                            <h4 className='my-1 text-md'>Creator: {ProductMapDetail.creator}</h4>
                    </div>
                    
                </div >
                <div className='flex justify-center text-center bg-neutral-900 text-neutral-300'>
                    {console.log(ProductMapDetail.stock)}
                    {ProductMapDetail.stock === 0
                    ? 
                    <h2 className='mt-7 p-2 text-red-800 border-b-4 border-red-900'>OUT OF STOCK 1</h2> 
                    :
                        (cart 
                        ?                    
                        <Link to={'/cart'} className='w-1/5 mt-5 ml-40 p-2 border-2 rounded-lg hover:bg-violet-500'>Go to Cart</Link>
                        :
                        <ItemCount initial={1} stock={ProductMapDetail.stock} onAdd={onAdd}/>
                    )}                      
                </div>
            </div>
        </>
        )
    }
export default ItemDetail