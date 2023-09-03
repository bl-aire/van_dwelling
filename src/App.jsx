import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./server"
import './App.css'
import Head from './components/Head'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
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
