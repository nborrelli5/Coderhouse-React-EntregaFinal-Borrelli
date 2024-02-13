import React from 'react';
import { useState } from 'react';

// const ItemCount = ({stock,initial,onAdd }) => {
const ItemCount = ({stock,initial}) => {

const [count,setCount] = useState (1)

const decrease=()=>{
    if (count>initial){setCount(count-1)
    }
}

const increase=()=>{
    if (count<stock){setCount(count+1)
    }
}

    return (
    <div className='flex mt-5 bg-neutral-800 text-white justify-center items-center'>
        <p className='text-xl'>Cantidad:</p>
        <button onClick={decrease} className='mx-5 text-4xl'>-</button>
        <p className='text-2xl text-purple-500'>{count}</p>
        <button onClick={increase} className='mx-5 text-4xl'>+</button>
        <button className='p-2 border-2 rounded-lg hover:bg-violet-500'>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount