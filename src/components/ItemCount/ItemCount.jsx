import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock,initial,onAdd}) => {

const [count,setCount] = useState (1)

const decrease=()=>{
    if (count>initial){setCount(count-1)
    }
}

const increase=()=>{
    if (count<stock){setCount(count+1)
    }
}

const addToCart =()=>{
    onAdd(count)
}


    return (
    <div className='flex mt-5 text-white justify-center items-center'>
        <p className='text-xl'>Quantity:</p>
        <button onClick={decrease} className='mx-5 text-4xl'>-</button>
        <p className='text-2xl text-purple-500'>{count}</p>
        <button onClick={increase} className='mx-5 text-4xl'>+</button>
        <button onClick={addToCart} className='p-2 border-2 rounded-lg hover:bg-violet-500'>Add to Cart</button>
    </div>
    )
}

export default ItemCount