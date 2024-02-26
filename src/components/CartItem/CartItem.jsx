import React from 'react';

const CartItem = ({cartProduct,deleteItem}) => {
    return (
            <div className='flex w-11/12 my-2 mx-5 py-2 px-5 align-top justify-start bg-neutral-800 text-neutral-300'>
                <div className='flex mx-2 w-40 items-center' >
                        <img src={cartProduct.ProductMapDetail.img} className='h-48 w-40 object-center border-2 border-neutral-700'></img>                    
                </div>
                <div className='flex flex-col mx-5 w-4/12 text-3xl font-bold justify-center'>
                    <h4 className='my-1'>{cartProduct.ProductMapDetail.title}</h4>
                    <h4 className='my-1 text-base'>{cartProduct.ProductMapDetail.description}</h4>
                </div>
                <div className='flex flex-col mx-5 justify-center'>
                    <h4 className='text-lg font-bold'>$ {(cartProduct.ProductMapDetail.price)}</h4>
                    <h4 className='my-1 text-lg'>Quantity: {cartProduct.count}</h4>
                </div>
                <div className='flex mx-5'>
                    <h4 className='flex my-auto mx-5 text-2xl font-bold text-center justify-center'>$ {(cartProduct.ProductMapDetail.price)*(cartProduct.count)}</h4>
                </div>
                <div className='flex mx-5 justify-end'>
                    <button onClick={()=> deleteItem(cartProduct.ProductMapDetail.id)}>
                        <img src="./assets/svg/remove.svg" alt="Remove from Cart" className='flex h-10' />
                    </button>

                </div>
            </div>
    );
};

export default CartItem;