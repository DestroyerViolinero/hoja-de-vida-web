import React, { useState } from "react";
import './HamburguerMenu.css' // Estilos CSS

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Habilidades</li>
        <li>Acerca de Mí</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
