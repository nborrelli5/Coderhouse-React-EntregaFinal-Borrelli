import React, {useContext, useState} from 'react'
import { db } from '../../firebase/config'
import {collection,addDoc,updateDoc,doc,getDoc} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'


const Checkout = () => {

    const {cart, removeList,totalPrice} = useContext(CartContext);

    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirm,setEmailConfirm] = useState("")
    const [comment,setComment] = useState("")
    const [error,setError] = useState("")
    const [orderId,setOrderId] = useState("")        

    const formSubmit = (event) => {

        event.preventDefault()

        if(!name){
                setError("Field 'Name' is required")
                return}

        if(!lastName){
                setError("Field 'Last Name' is required")
                return}
        if(!email){
                setError("Field 'Email' is required")
                return}
        if(!emailConfirm){
                setError("Field 'Email Confirmation' is required")
                return}

        if(email !== emailConfirm) {
            setError("Email Confirmation does not match")
            return}

            const order = {
                item:cart.map((product)=>({
                    id:product.ProductMapDetail.id,
                    name: product.ProductMapDetail.title,
                    quantity: product.count
                    })
                ),
                total: totalPrice(),
                date: new Date(),
                name,
                lastName,
                email,
                comment
            }

            Promise.all(
                order.item.map(async (productOrder) => {
                    const productRef = doc(db,"products",productOrder.id);
                    const productDoc = await getDoc(productRef)
                    const updateStock = productDoc.data().stock
    
                    await updateDoc(productRef, {
                        stock: updateStock - productOrder.count
                    })
                })
            )
            .then(() => {
                addDoc(collection(db,"orders"),order)
                .then((docRef) => {
                    setError("")
                    setOrderId(docRef.id)
                    removeList()
                })
                .catch((error) => {
                    console.log(error)
                    setError("Order could not be created")
                })
    
            })
            .catch((error) => {
                console.log(error)
                setError("Stock cannot be updated")
            })
    }
    

    return (

    <div>

        <form onSubmit={formSubmit}>

            <div>
                {cart.map((productsList)=>
                    <div key={productsList.ProductMapDetail.id}>
                        {productsList.ProductMapDetail.title} | {productsList.count} unit/s
                    </div>            
                )}
            </div>
            
            <div className='text-white m-2 text-2xl '>
                <div className='flex flex-col'>
                    <div className='flex m-8' >
                        <label htmlFor="Name" className='w-1/2 mr-12 text-right'>Name*</label>
                        <input name="Name" type='text' onChange={(e) => setName(e.target.value)} className='bg-transparent  border-purple-900 rounded-lg border-4 focus:outline-black focus:bg-purple-500 focus:bg-opacity-40'/>
                    </div>

                    <div className='flex m-8'>
                        <label htmlFor="Last-Name" className='w-1/2 mr-12 text-right'>Last Name*</label>
                        <input name="Last-Name" type='text' onChange={(e) => setLastName(e.target.value)} className='bg-transparent  border-purple-900 rounded-lg border-4 focus:outline-black focus:bg-purple-500 focus:bg-opacity-40'/>
                    </div>
                        
                    <div className='flex m-8'>
                        <label htmlFor="Email" className='w-1/2 mr-12 text-right'>Email*</label>
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)} className='bg-transparent  border-purple-900 rounded-lg border-4 focus:outline-black focus:bg-purple-500 focus:bg-opacity-40'/>
                    </div>
                        
                    <div className='flex m-8'>
                        <label htmlFor="Email-Confirm" className='w-1/2 mr-12 text-right'>Email Confirmation*</label>
                        <input name="Email-Confirm" type='email' onChange={(e) => setEmailConfirm(e.target.value)} className='bg-transparent  border-purple-900 rounded-lg border-4 focus:outline-black focus:bg-purple-500 focus:bg-opacity-40'/>
                    </div>
                        
                    <div className='flex m-8'>
                        <label htmlFor="Comment" className='w-1/2 mr-12 text-right'>Comment</label>
                        <textarea name="Comment" cols={22} onChange={(e) => setComment(e.target.value)} className='bg-transparent  border-purple-900 rounded-lg border-4 focus:outline-black focus:bg-purple-500 focus:bg-opacity-40'></textarea>
                    </div>
                </div>
                <div className='flex flex-col m-12'>
                    <button className='w-auto mx-auto mb-5 p-4 border-2 rounded-lg bg-violet-700 hover:bg-violet-500'>Complete Purchase</button>
                </div>
                    
                <div className='text-red-700 text-center text-2xl'>
                    {error}
                </div>
                <div className='mb-24 text-center text-2xl'>
                    {orderId.length !== 0
                    ?
                    <div>
                        <p>Thank you for your purchase! your order ID is</p><p className='text-violet-700 text-3xl'>{orderId}</p>
                    </div>
                    :
                    <p></p>
                    }
                </div>
            </div>

        </form>
    </div>

    )
}

export default Checkout