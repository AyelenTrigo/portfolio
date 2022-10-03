import React from "react";
import '../style/SobreMi.css'
import Description from '../components/Description'

function SobreMi() {
  return (
    <section className="sobreMi">
      <h2 className="sobreMi_titulo">Un poco sobre mi</h2>
      <Description 
        titulo="Mis estudios"
        descripcion="En la actualidad me encuentro aprendiendo y practicando React, y reforzando mis conocimientos adquiridos en cursos particulares y en videos de YouTube.
        
        En estos momentos estoy cursando 'Argentina Programa' la etapa #SéProgramar, del plan nacional de formación en programación. El mismo apunta a la formación en programación Fullstack.
        
        Al mismo tiempo, estoy cursando en Egg Cooperation, una plataforma educativa online en donde, además de repasar  los fundamentos de programación, puedo desarrollar habilidades blandas tales como la empatía, la comunicación y trabajo en equipo, entre otras.
        
        Para 2023 tengo entre mis planes inscribirme en la Univerdidad para cursar la Licenciatura en Sistemas."
      />
      <Description 
        titulo="Mi trabajo"
        descripcion="En la actualidad y desde hace 9 años me encuentro trabajando como
        técnica de fotogrametría dentro del Gobierno de la Ciudad de Buenos
        Aires. Mi trabajo consiste tanto en la fotointerpretación y
        relevamiento de objetos catastrales, como en la generación de
        altimetría para la proyección de curvas de nivel en el terreno.
        En este último tiempo capacité a los nuevos ingresantes de la gerencia y me encuentro coordinando las tareas diarias el proyecto de actualización de los espacios verdes públicos de la Ciudad de Buenos Aires"
      />
    </section>
  );
}

export default SobreMi;
