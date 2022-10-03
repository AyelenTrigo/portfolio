import { React } from "react";
import '../style/Header.css';
import icono from '../images/bracket.png'
import pdf from '../images/CV TRIGO MARIA AYELEN.pdf'

function Header() {
    return(
    <header>
      <div>
        <img src={icono} alt="" />
        </div>
        <div>
  
    <button className="boton_CV">
      <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV TRIGO MARIA AYELEN.pdf"> 
      Descarga mi CV
      </a>
    </button>
</div>
    </header>
    )
};
export default Header;