import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import logops from '../assets/parshiv_shah_roman.png'
import Menu from "./menu.component";
import './navbar.scss'


const NavBar = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className="logo-container" to='/'>
                    <img src={logops} alt='logo' className="logo-container" />
                </Link>

                <div className="link-container">
                    <Menu />                    
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}

export default NavBar;