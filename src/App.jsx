import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Property from './pages/Property'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/property' element={<Property/>}/>
    </Routes>
    </>
  )
}

export default App
