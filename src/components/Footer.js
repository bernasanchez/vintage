import React from "react";
import vintagelogo from '../assets/vintagelogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () =>{

    return(
        <>
        <footer className="bg-dark text-white mt-5 py-4">
        <div className="container ">
            <nav className="row">
                <Link to='/' className="col-3 text-reset text-uppercase d-flex aling-items-center mr-2" style={{textDecoration: 'none'}}> 
                    <img src={vintagelogo} 
                    alt="logoVintage" width="30" height="30"
                    id="imgLogo"
                    /> 
                     V I N T A G E
                </Link>
                <ul className="col-3 list-unstyled textosFooter">
                    <li className="font-weight-bold text-uppercase">Acerca de</li>
                    <li> <a href="#" className="text-reset text-decoration-none">Quienes Somos</a> </li>
                    <li> <a href="#" className="text-reset text-decoration-none">Términos y Condiciones</a> </li>
                    <li> <a href="#" className="text-reset text-decoration-none">Defensa del Consumidor</a> </li>
                </ul>
                <ul className="col-3 list-unstyled textosFooter">
                    <li className="font-weight-bold text-uppercase">Catálogo</li>
                    <li> <Link to='/category/hombre' className="text-reset text-decoration-none">Hombre</Link> </li>
                    <li> <Link to='/category/mujer' className="text-reset text-decoration-none">Mujer</Link> </li>
                    <li> <Link to='/category/deco' className="text-reset text-decoration-none">Deco</Link> </li>
                </ul>
                <ul className="col-3 list-unstyled textosFooter">
                    <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                    <li className=""> <a href="https://github.com/bernasanchez" className="text-reset" style={{textDecoration:'none'}}>
                        { <FontAwesomeIcon icon={faGithub}  style={{marginRight:'10px'}}/> }
                        github/bernasanchez
                        </a>
                    </li>
                    <li className=""> <a href="https://www.linkedin.com/in/bernasanchez/" className="text-reset" style={{textDecoration:'none'}}>
                        { <FontAwesomeIcon icon={faLinkedin} style={{marginRight:'10px'}}/> }
                        linkedin/bernasanchez
                        </a> 
                    </li>
                    <li className=""> <a href="https://www.instagram.com/bernisanchez09/" className="text-reset" style={{textDecoration:'none'}}>
                        { <FontAwesomeIcon icon={faInstagram}  style={{marginRight:'10px'}}/> }
                        instagram/bernisanchez09
                        </a> 
                    </li>
                    <li className=""> <a href="https://www.facebook.com/bsanchez09/" className="text-reset" style={{textDecoration:'none'}}>
                        { <FontAwesomeIcon icon={faFacebook}  style={{marginRight:'10px'}}/> }
                        facebook/bsanchez09
                        </a> 
                    </li>
                    
                        
                        
                       
                      
                        
                    
                    
                   
                </ul>
            </nav>
        </div>
        </footer>
        </>

    )

}
export default Footer;