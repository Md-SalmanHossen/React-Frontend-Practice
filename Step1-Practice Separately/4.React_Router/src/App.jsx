import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import MenCollection from './pages/MenCollection';
import WomenCollection from "./pages/WomenCollection"

const App = () => {
  return (
    <div  className="p-4">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path="men" element={<MenCollection/>}/>
        <Route path="women" element={<WomenCollection/>}/>
        </Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
