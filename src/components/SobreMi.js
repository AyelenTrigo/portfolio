import React from "react";
import '../style/SobreMi.css'
import Description from '../components/Description'

function SobreMi() {
  return (
    <section className="sobreMi">
      <h2 className="sobreMi_titulo">Un poco sobre mi</h2>
      <Description 
        titulo="Mis estudios"
        descripcion="En la actualidad me encuentro aprendiendo y practicando React, y reforzando mis conocimientos adquiridos en cursos particulares y en videos de YouTube. Este mismo portfolio está creado con React. Por otro lado, también estoy dando mis primeros pasos en bases de datos con Node.js y Postgres."
        descripcion1="En diciembre de 2022 concluí la etapa #SéProgramar de 'Argentina Programa', de plan nacional de formación en programación. Estoy aguardando la inscripción para la segunda etapa #yoProgramo en el mes de marzo, aproximadamente. El mismo apunta a la formación en programación Fullstack."
        descripcion2="En octubre de 2022 terminé el curso 'Programación desde Cero' en Egg Cooperation, una plataforma educativa online en donde, además de repasar los fundamentos de programación, puse a prueba y desarrollé habilidades blandas tales como la empatía, la comunicación y trabajo en equipo, entre otras."
        descripcion3="Para 2023 tengo entre mis cursar la Tecnicatura Superor en Desarrollo de Software (a distancia) que imparte la 'Agencia de Aprendizaje a lo largo de la vida' del Gobierno de la Ciudad de Buenos Aires. "
      />
      <Description 
        titulo="Mi trabajo"
        descripcion="En la actualidad y desde hace 10 años me encuentro trabajando como
        técnica de fotogrametría dentro del Gobierno de la Ciudad de Buenos
        Aires."
        descripcion1="Mi trabajo consiste tanto en la fotointerpretación y
        relevamiento de objetos catastrales, como en la generación de
        altimetría para la proyección de curvas de nivel en el terreno.
        En este último tiempo capacité a los nuevos ingresantes de la gerencia y me encuentro coordinando las tareas diarias el proyecto de actualización de los espacios verdes públicos de la Ciudad de Buenos Aires"
      />
    </section>
  );
}

export default SobreMi;
