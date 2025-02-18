import { useState } from 'react'
import './App.css'
import PaginaHome from './componentes/PaginaHome/PaginaHome'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <PaginaHome/>
  
      </div>
    
    </>
  )
}

export default App
