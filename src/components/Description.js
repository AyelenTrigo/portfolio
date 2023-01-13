import React from "react";
import '../style/Description.css'

function Description(props) {
  return (
    <div className="descripcion">
      <h3 className="descripcion_titulo">{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <p>{props.descripcion1}</p>
      <p>{props.descripcion2}</p>
      <p>{props.descripcion3}</p>
    </div>
  );
}

export default Description;
