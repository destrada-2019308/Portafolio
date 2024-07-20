import React from 'react'

import html from '../../img/html.png'
import css from '../../img/css-3.svg'
import js from '../../img/js.png'
import java from '../../img/java.svg'
import javaee from '../../img/javaee.png'
import boo from '../../img/bootstrap.png'
import mysql from '../../img/mysql.svg'
import mong from '../../img/mongo.png'
import node from '../../img/nodejs.png'
import react from '../../img/react.png'
import vite from '../../img/vite.svg'
import expr from '../../img/express-109.svg'
import git from '../../img/github.svg'


import AnimatedExample from '../ChargerBar/AnimatedExample'


export const Article = () => {
    return (
        <div>
            <section className="tastes">
                <div className="tastes-content container">
                    <h2>Habilidades</h2>
                    <p className="txt-p">
                        Aquí encontraras las tecnologías que domino hasta el momento.
                    </p>
                    <div className="tastes-group">
                        <div className="tastes-1">
                            <img src={html} alt="" />
                            <h3>HTML</h3>
                            <p>
                                Lenguaje de marcado de hipertexto

                            </p>
                            <AnimatedExample now={85} />
                        </div>
                        <div className="tastes-1">
                            <img src={css} alt="" />
                            <h3>CSS</h3>
                            <p>
                            Cascading Style Sheets

                            </p>
                            <AnimatedExample now={75} />
                        </div>
                        <div className="tastes-1">
                            <img src={js} alt="" />
                            <h3>JS</h3>
                            <p>
                                Lenjuage de programación

                            </p>
                            <AnimatedExample now={70} />
                        </div>
                        <div className="tastes-1">
                            <img src={java} alt="" />
                            <h3>JAVA</h3>
                            <p>
                                Lenguaje orientado a objetos

                            </p>
                            <AnimatedExample now={80} />
                        </div>
                        <div className="tastes-1">
                            <br /><br />
                            <img src={javaee} alt="" />
                            
                            <h3>JAVA EE</h3>
                            
                            <p>
                                
                                Java Enterprise edition

                            </p>
                            <AnimatedExample now={50} />
                        </div>
                        <div className="tastes-1">
                            <img src={boo} alt="" />
                            <h3>BOOTSTRAP</h3>
                            <p>
                                Framework multiplataforma

                            </p>
                            <AnimatedExample now={60} />
                        </div>
                        <div className="tastes-1">
                            <img src={mysql} alt="" />
                            <h3>MySQL</h3>
                            <p>
                                Base de datos relacionalL

                            </p>
                            <AnimatedExample now={90} />
                        </div>
                        <div className="tastes-1">
                            <br /><br /><br />
                            <img src={mong} alt="" />
                            <h3>MONGO DB Y Mongo DB Atlas</h3>
                            <p>
                                Base de datos no relacional

                            </p>
                            <AnimatedExample now={65} />
                        </div>
                        <div className="tastes-1">
                            <img src={node} alt="" />
                            <h3>NODEJS</h3>
                            <p>
                                Entorno en tiempo de ejecución multiplataforma

                            </p>
                            <AnimatedExample now={85} />
                        </div>
                        <div className="tastes-1">
                            <br />
                            <img src={react} alt="" />
                            <h3>REACTJS</h3>
                            <p>
                                Biblioteca de JavaScript

                            </p>
                            <AnimatedExample now={90} />
                        </div>
                        <div className="tastes-1">
                            <img src={vite} alt="" />
                            <h3>VITE</h3>
                            <p>
                                Herramienta de compilación 

                            </p>
                            <AnimatedExample now={90} />
                        </div>
                        <div className="tastes-1">
                            <br /><br /><br />
                            <img src={expr} alt="" />
                            <h3>EXPRESS</h3>
                            <p>
                                Framework de node js

                            </p>
                            <AnimatedExample now={90} />
                        </div>
                        <div className="tastes-1">
                            <img src={git} alt="" />
                            <h3>GIT-GITHUB</h3>
                            <p>
                                Plataforma donde puedes almacenar, compartir y trabajar junto con otros usuarios para escribir código

                            </p>
                            <AnimatedExample now={90} />
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
