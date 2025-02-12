import { useState } from "react"
import './Demodois.css'
import Usuarios from "../Usuarios/Usuarios"


const Demodois = () => {
    const [valor, setValor] = useState(0)
    const [usuario, setUsuario] = useState('')


  return (
    <div className="container-demoDois">
        <h2>useState</h2>
        <button onClick={()=>{setValor (valor - 1 )}}>-</button>
        {valor}
        <button onClick={()=>{setValor (valor + 1 )}}>+</button>
        <button onClick={()=>{setUsuario(prompt("Username"))}}>Fazer login</button>
        {usuario && <p>Olá {usuario}</p>}
        {usuario ? <p>Olá {usuario}</p> : <p>Faça login</p>}

       {usuario &&  <Usuarios username={usuario}/>}
        </div>
  )
}

export default Demodois