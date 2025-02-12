import React from 'react'
import './DemoUm.css'
import { GrCloud } from "react-icons/gr";
import { GrAnchor } from "react-icons/gr";
function DemoUm() {

  function responderClique(){
    alert("parabéns, você clicou!")
  }

  return (
    <div className='container-demo1'>
        <button onClick={responderClique} img>Clique aqui</button>
        <button onClick={()=>{alert("Teste!!")}}>🙌</button>
        
       <img className='img-dev' src="./imagens/Video game developer-rafiki.svg" alt="" />
       <GrCloud className='img-nuvem' onClick={responderClique} fontSize={45} />
       <GrAnchor fontSize={45}/>
        </div>
        
  )
}

export default DemoUm