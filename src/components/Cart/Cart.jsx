import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const {cart,deleteItem,removeList,totalPrice} = useContext(CartContext)
  return (
      <div className='text-white m-2 text-2xl'>
          {cart.length == 0 
          ? 
          <h1 className='font-bold'>Your cart is empty</h1>                        
          :
          <div>
            <h1 className='m-8 text-3xl font-bold'>My Cart</h1>

            {cart.map((p)=>(
              <CartItem key={p.ProductMapDetail.id} cartProduct={p} deleteItem={deleteItem}/>
            ))}
            <div className='flex flex-col'>
              <p className='flex my-8 mx-20 text-3xl justify-end '>Total: $ {totalPrice()}</p>
              <div className='flex justify-end'>
                <button onClick={removeList} className='w-2/12 mx-20 mb-5 p-2 justify-end border-2 rounded-lg hover:bg-violet-500'>Clear all items</button>
              </div>
            </div>
          </div>             
          } 
      </div>
  );
};

export default Cart;