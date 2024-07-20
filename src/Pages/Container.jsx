import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import { Cards } from '../Components/Cards/Cards'
import { Article } from '../Components/Article/Article'
import './Auth.css'


export const Container = () => {
  return (
    <div>
      <Navbar />
      <br />
      <header className="header">
        <div className="header-content container">
          <h1><strong>Bienvenido a mi Portafolio</strong></h1>
          <hr />
          <br />
          <h2>Hola, soy Diego. Soy programador y estudiante de informática.</h2>
          <p className='lead'>
            <div className='contenido'>
              En este sitio encontrarás todos los proyectos que he realizado a lo largo de mis tres años de carrera.
              Cada proyecto refleja mi progreso y dedicación en el campo de la programación. A continuación,
              podrás explorar una variedad de trabajos que abarcan diferentes tecnologías y lenguajes de programación, incluyendo:
              <div className='div-importante'> Desarrollo web, aplicaciones backend y frontend, </div>
            </div>
          </p>
          <br />
          <div className='btn-div'>
            <a href="#footer" className="boton uno"><span>Contáctame</span></a></div>
        </div>
      </header>
      <main className="likes" id='sobremi'>
        <div className="likes-content container context">
          <h2>Datos personales:</h2>
          <div className="likes-group">
            <div className="likes-1">
              <h3>Centro Educativo Técnico Laboral Kinal</h3>
              <h3 htmlFor="">Nombre Completo: <span>Diego René Estrada Juárez</span></h3>
              <h3 htmlFor="">Edad: <span>18 </span></h3>
              <h3 htmlFor="">Fecha de nacimiento: <span> 21/03/2006 </span></h3>
              <h3 htmlFor="">Años desarrollando: <span>  3 años </span></h3>
              <h3 htmlFor="">Actualmente me sigo formando</h3>
            </div>
          </div>
          <h1> Sobre mi:</h1>
          <br />
          <p>
            Soy estudiante de la fundación Kinal, actualmente estoy estudiando informática y me especializo en el área de la programación, me dedico a estudiar y hacer deporte, actualmente manejo un nivel de idioma inglés aceptable, con una mayor facilidad para el área lectora y comprensiva del mismo,
            <br />
            Mis gustos se centran más en el deporte, entrenamientos variados y el estudio, junto con el estudio también me refiero al área de ciencias y tecnología, tengo mucho interés en el área de física y matemáticas, a mi último año de carrera se me dan bien estas dos materias, además me gusta la parte de lógica que es la programación, ver cómo funcionan las cosas, etc.
            <br />
            Centrándonos en mis habilidades académicas, para la parte de programación/informática, mis lenguajes de programación preferidos son Java y JavaScript, con sus diferentes librerías,
            <br />
            Soy un estudiante autodidacta y disciplinado, actualmente estoy estudiando a fondo estos dos lenguajes y perfeccionando mis habilidades en el deporte y el idioma inglés.

          </p>
        </div>
      </main>
      
      <Article/>
      <Cards/>
      <Footer />
    </div>
  )
}
