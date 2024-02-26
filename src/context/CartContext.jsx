import React,{createContext,useState} from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addToCart = (ProductMapDetail,count) =>{
            

        setCart(ProductMapDetail,count)
        const duplicatedProduct = cart.findIndex(p => p.ProductMapDetail.id == ProductMapDetail.id)

        if(duplicatedProduct==-1){
            setCart([...cart,{ProductMapDetail,count}])

        }else{
            const newCart = [...cart]
            newCart[duplicatedProduct].count += count
            setCart(newCart)
        }
    }

        const deleteItem =(id)=>{
            const newCart = cart.filter(item=>item.ProductMapDetail.id !== id)
            setCart(newCart)
        }

        const removeList =()=>{
            setCart([])
        }
    
        const cartTotalQuantity =()=>{
            const totalQuantity = cart.reduce((total,item)=> total+item.count,0)
            return totalQuantity
        }

        const totalPrice =()=>{
            const totalPriceReduce = cart.reduce((total,item)=> total + (item.ProductMapDetail.price * item.count),0)
            return totalPriceReduce
        }
    

    return(
        <CartContext.Provider value={{cart,addToCart,deleteItem,removeList,cartTotalQuantity,totalPrice}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider