import './PaginaHome.css'
import { useState } from "react";


const numerosComImagens = [
  { imagem: "noto--airplane.svg" },
  { imagem: "noto--alarm-clock.svg" },
  { imagem: "noto--baby.svg" },
  {  imagem: "noto--balloon.svg" },
  {  imagem: "noto--blue-heart.svg" },
  { imagem: "noto--bat.svg" },
  {  imagem: "noto--bison.svg" },
  {  imagem: "noto--briefcase.svg" },
  {  imagem: "noto--axe.svg" },
  { imagem: "noto--bread.svg" },
];

 function PaginaHome() {
  const [sorteado, setSorteado] = useState();

  const realizarSorteio = () => {
    const itemSorteado = numerosComImagens[Math.floor(Math.random() * numerosComImagens.length)];
    setSorteado(itemSorteado);
  };

  return (
    <div className='Pagina'>
      <button
        onClick={realizarSorteio}
            className="Botao"> Sortear Imagens</button>

      {sorteado && (
        <div>
        <img src={sorteado.imagem} />
       
        </div>
      )}
    </div>
  );
}

export default PaginaHome