import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import Prediction from './components/Prediction'
import ResultModal from './components/ResultModal'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <>
    <Routes>
      {/* <Route path='/' element={<PrivateRoute><Prediction /></PrivateRoute>} /> */}
      <Route path='/' element={<PrivateRoute element={<Prediction />} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
