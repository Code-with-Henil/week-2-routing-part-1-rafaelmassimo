
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Location from './components/Location'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductInfo from './components/ProductInfo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productName' element={<ProductInfo />} />
          <Route path='/products/croissant' element={<ProductInfo />} />
          <Route path='/location' element={<Location />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
