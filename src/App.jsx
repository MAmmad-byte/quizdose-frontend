import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection={"column"} >
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* <Route element={<Home/>} path='/' /> */}
      <Route element={<Login />} path='/login' />
      <Route element={<Signup />} path='/signup' />
      <Route element={<Dashboard />} path='/dashboard' />
      <Route element={<Quiz />} path='/quiz' />
     
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  </Box>
  )
}

export default App
