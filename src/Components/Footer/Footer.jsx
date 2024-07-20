import React from 'react'
import './Footer.css'
import facebook from '../../img/facebook.png'
import insta from '../../img/instagram.png'
import github from '../../img/github.png'


export const Footer = () => {
    return (
        <div>

            <footer id="footer" className="footer">
                <div className="footer-content container">
                    <div className="link">
                        <h3>Contáctame</h3>
                        <ul>
                            <li><a href="mailto:destrada-2019308@kinal.edu.gt" >Correo</a></li>
                            <li><a href="https://goo.gl/maps/GoGkjSS8k3UWXr4XA" target="_blank">Zona 5 de Villa Nueva, Fuentes del Valle II</a></li>
                            <li><a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B%2F8G0NSMkTdCsmAfdmMNRWA%3D%3D" target="_blank">LinkedIn</a></li>
                            <li><p>+(502) 5795-4770</p></li>
                            
                        </ul>
                    </div>
                    <div className="link" id="contactame">
                        <h3>Mis datos</h3>
                        <ul>
                            <li><a className="a" href="https://facebook.com" target="_blank"><img src={facebook} /></a></li>
                            <li><a className="a" href="https://instagram.com" target="_blank"><img src={insta} /></a></li>
                            <li><a className="a" href="https://github.com" target="_blank"><img src={github} /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
