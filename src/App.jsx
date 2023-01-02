import './App.css'
// import { useSelector } from 'react-redux'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './pages/Pokedex'


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' elemnts={<Home />} />

        {/* Rutas Protegidassss */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>} />
        </Route>
      </Routes>
      <Home/>
    </div>
  )
}

export default App
