import React from 'react'
import './ItemDetail.css'


const ItemDetail = ({ProductMapDetail}) => {
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
                            <h4 className='my-1 text-lg'>Categoria: {ProductMapDetail.category}</h4>
                            <h4 className='my-1 text-md'>Puntaje: {ProductMapDetail.rate}</h4>
                            <h4 className='my-1 text-md'>Código: {ProductMapDetail.code}</h4>
                            <h4 className='my-1 text-md'>Creador: {ProductMapDetail.creator}</h4>
                    </div>
                </div>
            </div>
        </>
        )
    }
export default ItemDetail