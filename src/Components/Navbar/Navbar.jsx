import React from 'react'
import './Navbar.css'
import img from '../../img/am.jpeg'

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="menu ">
          <a href="/" className="logo" >Portafolio de Proyectos</a>
          <nav className="navbar">
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#sobremi">Sobre mi</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contactame">Contáctame</a></li>
              <li><a href="https://www.canva.com/design/DAGLcB-Ob4E/6WgrsGt0UmgNET73tOqtpg/edit?utm_content=DAGLcB-Ob4E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank'>Currículum</a></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
