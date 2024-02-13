import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <div className='bg-neutral-900 min-h-screen'>
          <BrowserRouter>
            
            <NavBar/>

            <Routes> 

              <Route path='/' element={<ItemListContainer/>}/>
              
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>  

              <Route />
                            
              <Route path='*' element={"Error 404"}/>

            </Routes>

          </BrowserRouter>
        </div>
    </>
  )
}

export default App
