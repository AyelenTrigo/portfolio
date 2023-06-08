import React from "react";
import '../style/SobreMi.css'
import Description from '../components/Description'

function SobreMi() {
  return (
    <section className="sobreMi">
      <h2 className="sobreMi_titulo">Un poco sobre mi</h2>
      <Description 
        titulo="Experiencia y aprendizaje"
        descripcion="Aunque no cuento con experiencia formal en el ámbito laboral de desarrollo web, actualmente colaboro en un proyecto de actualización de página web bajo la guía de un senior experimentado. Soy responsable del desarrollo del Front-End, trabajando en equipo y completando las tareas asignadas. Dedico 3 horas semanales a este proyecto, priorizando la calidad sobre la velocidad en cada aspecto del trabajo realizado." 
        descripcion1="En mi trabajo actual, he tenido la oportunidad de cultivar y fortalecer habilidades esenciales más allá del ámbito técnico. He demostrado habilidades para trabajar en equipo, colaborando de manera armoniosa y contribuyendo activamente al logro de objetivos comunes. También he demostrado habilidades sólidas en la resolución de problemas, utilizando enfoques creativos y analíticos para abordar desafíos y encontrar soluciones efectivas. Por último, mi capacidad de adaptación me ha permitido enfrentar cambios y situaciones nuevas con flexibilidad y agilidad, ajustándome rápidamente a los requisitos y demandas del entorno laboral."
      />
      <Description 
        titulo="Enfoque y perseverancia"
        descripcion="Soy una persona autodidacta y estoy constantemente buscando oportunidades para mejorar mis habilidades y mantenerme actualizada con las últimas tendencias y tecnologías en el desarrollo Front-End. Mi enfoque se centra en el aprendizaje continuo y la perseverancia para superar desafíos."
      />
      <Description 
        titulo="Compromiso y crecimiento"
        descripcion="A pesar de la falta de experiencia laboral formal, soy una profesional comprometida y apasionada por lo que hago. No me detengo ante los desafíos, sino que los enfrento con determinación y perseverancia. Estoy dispuesta a invertir tiempo y esfuerzo para seguir creciendo profesionalmente y convertirme en una desarrolladora Front-End altamente competente."
      />
    </section>
  );
}

export default SobreMi;
