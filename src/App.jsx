
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Error404 from './pages/Error404'
import Footer from './components/Footer'
import Header from './components/header'
import Movil from './pages/Movil'
import Laptops from './pages/Laptops'
import Beauty from './pages/Beauty'
import Detalle from './pages/Detalle'
import Categorias from './pages/Categorias'


const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Header/>

      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/movil' element={<Movil/>}/>
      <Route path='/laptops' element={<Laptops/>}/>
      <Route path='/beauty' element={<Beauty/>}/>
      <Route path='/error404' element={<Error404/>}/>
      <Route path='/detalle/:id/:titulo' element={<Detalle/>}/>
      <Route path='/categorias/:cat' element={<Categorias/>}/>


      </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App