import React from 'react'
import './App.css'
import { Footer, Navbar } from './components'
import { AboutUs, Category, Home, Login, SinglePost, Achieve, ContactUs, Write, Register } from './pages'
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from 'react-router-dom';

const App = () => {

  const [login, setLogin] = useState()

  return (
    <Router>
      <div className='App'>
        <Navbar login={login} setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setLogin={setLogin} />} />
          <Route path='/singlepost/:postId' element={<SinglePost />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/category' element={<Category />} />
          <Route path='/achieve' element={<Achieve />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/write' element={<Write />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App