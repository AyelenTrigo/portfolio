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
            Estudio para desarrollarme como front-end developer de forma
            autodidaca y mediante cursos online. Mis objetivos son hacer crecer
            mi carrera profesional y seguir instruyendome en distintas áreas de la
            programación.
          </p>
        </div>
        <div id="foto">
          <img src={ fotoPerfil } alt="Foto Aye" />
        </div>
      </section>
    )
}

export default Intro;