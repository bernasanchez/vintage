import React, {Fragment} from 'react';
import CartWidget from './CartWidget';
import vintagelogo from '../assets/vintagelogo.png'

const NavBar = () => {
    return (
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                    <img    src={vintagelogo} 
                            alt="" width="30" height="30"
                            className="d-inline-block align-text-top"
                            id="imgLogo" />
                    V I N T A G E
                </a>
                
                <div className="d-flex flex-row">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hombre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mujer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Deco</a>
                    </li>
                    <span className="navbar-text">
                    <CartWidget />
                    </span>
                </ul>
                </div>
            </div>
        </nav>
    </Fragment>
    );
}
 
export default NavBar;