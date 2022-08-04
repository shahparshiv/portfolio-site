import NavLinks from "./navlinks.component";
import { TbMenu2 } from 'react-icons/tb';
import { useState } from "react";
import {CgClose} from 'react-icons/cg'


const Menu = () => {

    const [open , setOpen] = useState(false);

    const ham_icon = <TbMenu2 className="menu-icon" size='2vw' color="#C5C7D0" 
                        onClick={()=>setOpen(!open)}
                        />
    const close_icon = <CgClose className="menu-icon" size='2vw' color="#C5C7D0" 
                        onClick={()=>setOpen(!open)}
                        />

    return(
        <nav className='nav-menu'>
            {open ? close_icon: ham_icon}
            {open && <NavLinks className='nav-links'/>}
        </nav>
        
    )
}

export default Menu;