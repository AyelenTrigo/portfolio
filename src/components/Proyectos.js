import React from "react";
import "../style/Proyectos.css";
import Card from "./Card";

function Proyectos() {
  return (
      <section className="proyectos">
        <div className="proyectos_titulo">
          <h2>Mis últimos proyectos</h2>
        </div>
        <div className="proyectos_listado">
          <Card
            title="¿Qué comemos hoy?"
            tools="HTML CSS Javascript"
            description="Se trata de una web que te ayuda a decidir sobre
                qué armorzar o cenar dependiendo de los productos que tengas en la
                heladera."
            repo="https://github.com/AyelenTrigo/appdecomidas"
            sitio="https://appquecomemoshoy.web.app/"
          />
          <Card
            title="Tarot de Gatos"
            tools="HTML CSS Bootstrap Javascript"
            description="Un juego de cartas de tarot que te dice si dos personas son compatibles o no. Contiene imágenes del Tarot de Gatos de Alejandro Jodorowski"
            repo="https://github.com/AyelenTrigo/tarot_de_gatos"
            sitio="https://tarot-de-gatos.web.app/"
          />
          <Card
            title="Listado de compras"
            tools="HTML CSS Bootstrap Javascript"
            description="Una web app que para armar un listado de productos para compras que incluye varias categorías"
            repo="https://github.com/AyelenTrigo/mi_listado_de_compras"
            sitio="https://milistadodecompras.web.app//"
          />
          <Card 
            title="Disney Plus Landing Page"
            tools="HTML CSS"
            description="Es un clon de la página de Disney Plus a como esta se encontraba en febrero de 2022"
            repo="https://github.com/AyelenTrigo/landingpage_disneyplus"
            sitio="https://disneyplus-landingpage.web.app/"
          />
          <Card 
            title="Clon Google Landing Page"
            tools="HTML CSS"
            description="Es un clon de la página de Google Argentina"
            repo=""
            sitio="https://reto-3-gooogle-page.web.app/"
          />
        </div>
      </section>
  );
}
export default Proyectos;
