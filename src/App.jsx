import React from 'react'
import CartContextProvider from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState,useEffect } from 'react'
// // import {getFirestore,doc,getDoc} from 'firebase/firestore'
// import {getFirestore,collection,getDocs} from 'firebase/firestore'



const App = () => {
  
//   const [product,setProduct]=useState(null)
  
//   useEffect (()=>{
//     const db=getFirestore()

//     const productRef =doc(db,"productos","9FAot21d0PwQbVqBMzN3")

//     getDoc(productRef).then((snapshot)=>{
//       if(snapshot.exists){
//         setProduct({id: snapshot.id,...snapshot.data()})
//       }
//     })
//   },[])
  
  
    // const [product,setProduct]=useState(null)
 
  
  
  
  
  
  return (
    <>
        <div className='bg-neutral-900 min-h-screen'>
          <BrowserRouter>
            
            <CartContextProvider>

              <NavBar/>

              <Routes> 

                <Route path='/' element={<ItemListContainer/>}/>
                
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>  

                <Route path='/cart' element={<Cart/>} />

                <Route path='/checkout' element={<Checkout/>}/>

                <Route path='*' element={"Error 404"}/>

              </Routes>

            </CartContextProvider>

          </BrowserRouter>
        </div>
    </>
  )
}

export default App
