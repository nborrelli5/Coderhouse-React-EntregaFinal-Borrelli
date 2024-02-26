import React from 'react'
import CartContextProvider from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {getFirestore,doc,getDoc} from 'firebase/firestore'

const App = () => {
  
  // const [products,setProducts]=useState([])

  // useEffect (()=>{


  // },[])
  
  
  
  
  
  
  
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

                <Route path='*' element={"Error 404"}/>

              </Routes>

            </CartContextProvider>

          </BrowserRouter>
        </div>
    </>
  )
}

export default App
