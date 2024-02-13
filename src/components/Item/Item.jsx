import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({productMap}) => {
    return (
        <Link to = {`/detail/${productMap.id}`} >
            <div key={productMap.id} className='h-[30] w-64 border-2 rounded-xl bg-neutral-800 border-neutral-700 justify-center text-center text-neutral-300 hover:scale-105'>
                <h4 className='my-1 text-xl'>{productMap.title}</h4>
                <div className='h-64 p-2 flex justify-center' >
                    <img src={productMap.img} className='object-cover'></img>
                </div>
                <div className='max-h-xs max-w-xs'>
                    <h4 className='my-1 text-xl'>$ {productMap.price}</h4>
                    <p className='my-2 text-xs'>{productMap.description}</p>
                </div>            
            </div>
        </Link>
    )
}

export default Item