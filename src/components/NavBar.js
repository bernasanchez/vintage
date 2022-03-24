import React, {Fragment} from 'react';
import CartWidget from './CartWidget';
import vintagelogo from '../assets/vintagelogo.png'

const NavBar = () => {
    return (
    <Fragment>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button
                    class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index.html">
                    <img    src={vintagelogo} 
                            alt="" width="30" height="30"
                            class="d-inline-block align-text-top"
                            id="imgLogo" />
                    V I N T A G E
                </a>
                
                <div class="d-flex flex-row">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hombre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mujer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Deco</a>
                    </li>
                    <span class="navbar-text">
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