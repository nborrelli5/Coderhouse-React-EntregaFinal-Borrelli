import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productMap}) => {
    return (
        <div className='flex flex-wrap my-5 mx-10 justify-center gap-5'>
            {
                productMap.map((productMap)=>{
                    return(
                        <Item key={productMap.id} productMap={productMap}/>
                        )
                    })
            }
        </div>
        )
    }

    export default ItemList