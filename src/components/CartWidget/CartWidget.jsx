import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
//
    const {cartTotalQuantity} = useContext(CartContext)
    
    return(
        <Link to={'/cart'}>
            <div className='relative'>                 
                <img src="./assets/svg/cart.svg" alt="" className=' w-9 p-1 bg-neutral-600 rounded-full'/>
                    <div>
                        {cartTotalQuantity() == 0 
                        ? 
                        null 
                        : 
                        <span className='w-5 h-5 text-sm text-center font-bold absolute -top-1 left-6 text-white rounded-full bg-purple-500'>{cartTotalQuantity()}</span>
                    }
                    </div>
            </div>        
        </Link>
    )
}

export default CartWidget;