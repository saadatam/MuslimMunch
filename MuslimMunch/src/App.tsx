import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'



export default function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}
