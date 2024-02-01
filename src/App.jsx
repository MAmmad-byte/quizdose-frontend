import './App.css'
import { Box } from '@chakra-ui/react'
import Login from './pages/Login'
// import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'
import Logout from './pages/Logout'
import CreateQuiz from './pages/CreateQuiz'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <Box width="100%" minHeight="100vh" display="flex"  flexDirection={"column"} >

    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Login />} path='/login' />
      <Route element={<Signup />} path='/signup' />
      <Route element={<Logout />} path='/logout' />
      <Route element={<Dashboard />} path='/dashboard' />
      <Route element={<Quiz />} path='/user/quiz/:id' />
      <Route element={<CreateQuiz />} path='/quiz/create' />
     
    </Routes>
    <Footer />
    </BrowserRouter>
  </Box>
  )
}

export default App
