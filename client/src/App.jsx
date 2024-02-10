import { useState } from 'react'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './pages/Home'
import Store from './components/Store'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import LearnMore from './components/LearnMore'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/store-details' element={<Store />}></Route>
      <Route path='/learn-more' element={<LearnMore />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App