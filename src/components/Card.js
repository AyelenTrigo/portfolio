import React from "react";
import "../style/Card.css";

function Card(props) {
  const handleGithub = () => {
    window.open(props.repo, "_blank");
  };
  const handleSitio = () => {
    window.open(props.sitio, "_blank");
  };
  return (
    <div className="card_container">
      <div className="card_info">
        <p className="card_title">{props.title}</p>
        <p className="card_tools">{props.tools}</p>
        <p className="card_description">{props.description}</p>
      </div>
      <div className="card_buttons">
        <button onClick={handleGithub} className="card_buttons_button">
          Ir a Github
        </button>
        <button onClick={handleSitio} className="card_buttons_button">
          Ir al Sitio
        </button>
      </div>
    </div>
  );
}

export default Card;
