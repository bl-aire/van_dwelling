import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Head from './components/Head'
import Home from './components/Home'
import About from './components/About'

function App() {
  return(
    <>
      <BrowserRouter>
        <Head/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
