import './App.css'
import Customer from './Pages/Customer' 
import ServiceProvider from './Pages/ServiceProvider'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ServiceProvider />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
  )
}

export default App
