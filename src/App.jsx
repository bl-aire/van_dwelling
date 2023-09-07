import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./server"
import './App.css'
import Head from './components/Head'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Foot from './components/Foot'

function App() {
  return(
    <>
      <BrowserRouter>
        <Head/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
        <Foot/>
      </BrowserRouter>
    </>
  )
}

export default App
