import { Outlet} from "react-router-dom";
import { Fragment } from "react";
import logops from '../assets/parshiv_shah_roman.png'
import './navbar.scss'


const NavBar = () => {
    return(
        <Fragment>
        <div>
        <nav className="pnav navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
            <img className='logo' src={logops} alt='logo-img' />
        </a>
        <button className="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarText">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home</a> 
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">Projects</a>
            </li>
            </ul>
        </div>
        </nav>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default NavBar;