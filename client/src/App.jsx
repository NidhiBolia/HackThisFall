import { useState } from 'react'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Store from './components/Store'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}></Route>
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/store-details' element={<Store />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App