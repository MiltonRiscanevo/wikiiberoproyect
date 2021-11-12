import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <div>
                    <Link to="/contact">
                      Contact
                    </Link>
                    <Link to="/about">
                      About
                    </Link>
                    <Link to="/">
                      Home
                    </Link>
                </div>
                <div>
                    <Link to="/software_requirements">
                      Que son los requerimientos de software
                    </Link>
                </div>
           
      </div>

    )
}

export default NavBar
