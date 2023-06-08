import React from "react";
import '../style/Intro.css'
import '../style/Gordita.css'
import fotoPerfil from '../images/DSC_0212.jpg'

function Intro(){
    return(
        <section id="presentacion">
        <div className="intro">
          <h1>¡Hola, Soy Ayelén Trigo!</h1>
          <p>
          Soy una apasionada desarrolladora Front-End y maquetadora web. Mi objetivo es crear experiencias digitales impactantes y satisfactorias para los usuarios a través de la combinación de diseño y desarrollo.
          </p>
        </div>
        <div id="foto">
          <img src={ fotoPerfil } alt="Foto Aye" />
        </div>
      </section>
    )
}

export default Intro;