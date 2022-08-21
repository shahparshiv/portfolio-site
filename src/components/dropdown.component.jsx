import React, {useState} from "react";
import { Link } from 'react-router-dom';


const Dropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <div>
            <ul onClick={click ? 'dropdown-menu clicked': 'dropdown-menu' }>
                <li>
                    <Link className='dropdown-link' to='/about' onClick={()=>setClick(false)}> 
                        About
                    </Link>
                </li>
                <li>
                    <Link className='dropdown-link' to='/projects' onClick={()=>setClick(false)} >
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown;