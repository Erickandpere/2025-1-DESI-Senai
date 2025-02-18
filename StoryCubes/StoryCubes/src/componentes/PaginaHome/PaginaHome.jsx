import './PaginaHome.css'
import { useState } from "react";

function PaginaHome() {
  const [sorteado, setSorteado] = useState();

  const realizarSorteio = () => {
    const itens = ["🎃", "❤️", "🌟", "🍀", "🎉", "🌈", "⭐", "💥", "🔥", "🌙", "🌼", "🌻", 
      "🌸", "💫", "🍎", "🍓", "🍒", "🍉", "🍍", "🍑", "🍌", "🍒", "🍪", "🍩", 
      "🍫", "🍭", "🍬", "🍪", "🧁", "🎂", "🍰", "🍮", "🍷", "🍸", "🍺", "🥂", 
      "🥤", "🍿", "🥨", "🍿", "🌶️", "🍔", "🍟", "🍕", "🌮", "🍣", "🍜", "🍛", 
      "🍤", "🥗", "🍱", "🍲", "🥘", "🥑", "🍗", "🥩", "🍖", "🍣", "🥨", "🍙", 
      "🍚", "🍇", "🍉", "🍓", "🍊", "🍍", "🥭", "🍈", "🍑", "🍒", "🍋", "🍌", 
      "🍊", "🍍", "🍒", "🍓", "🍈", "🍑", "🍆", "🥒", "🥕", "🌽", "🍄", "🍑", 
      "🥭", "🍅", "🥝", "🍓", "🍆", "🍔", "🍟", "🍗", "🥪", "🌯", "🌮", "🍣",
      "🍤", "🍛", "🍜", "🥘", "🍝", "🍤", "🍣", "🍱", "🥗", "🍲", "🍿", "🍫"];
    const itemSorteado = itens[Math.floor(Math.random() * itens.length)];
    setSorteado(itemSorteado);
  };

  return (
    <div className='Pagina'>
      <h1>Use sua Imaginação</h1>
      <p>Crie sua Propria História</p>

      <button
        onClick={realizarSorteio}
        className="Botao"> Clique para Sortear</button>

      {sorteado && (
        <div>
          <span style={{fontSize:200}}>{sorteado}</span>
        </div>
      )}
    </div>
  );
}

export default PaginaHome;
