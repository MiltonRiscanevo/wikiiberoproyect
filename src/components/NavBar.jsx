import React from 'react'
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NavBar = () => {
    return (
        <div className="container_nav_bar">
            <div className="links_us">
                <Stack direction="row" spacing={2}>
                <Button variant="contained" disableElevation className="buttonUs">
                <Link to="/"className="decorations">
                      Home
                    </Link>
                </Button>       
                <Button variant="contained" disableElevation className="buttonUs">
                  <Link to="/contact" className="decorations">
                      Contact
                    </Link>
                </Button>

                <Button variant="contained" disableElevation className="buttonUs">
                <Link to="/about"className="decorations">
                      About
                    </Link>
                </Button >
                </Stack>
                        
            </div>
            <div className="links_datarequirements">
                <Stack direction="row" flexWrap="wrap" spacing={1} padding={1}>
                    <Button variant="outlined">
                      <Link to="/software_requirements" className="decorations">
                        Requerimientos de software
                      </Link>
                    </Button>
                    {/* <Button variant="outlined">
                        <Link to="/software_requirements_fundamentals" className="decorations">
                            Fundamentos del requerimiento de software
                        </Link>
                    </Button> */}
                    <Button variant="outlined">
                        <Link to="/software_requirements_process" className="decorations">
                            Proceso de requerimientos
                        </Link>
                    </Button>
                    <Button variant="outlined">
                        <Link to="/elicitation" className="decorations">
                            La captura
                        </Link>
                    </Button>
                    <Button variant="outlined">
                        <Link to="/requirements_analysis" className="decorations">
                            Análisis de requerimientos
                        </Link>
                    </Button>
                    <Button variant="outlined">
                        <Link to="/requirements_specification" className="decorations">
                            Especificación de requerimientos
                        </Link>
                    </Button>
                    {/* <Button variant="outlined">
                        <Link to="/requirements_validation" className="decorations">
                            Validación de requerimientos
                        </Link>
                    </Button>
                    <Button variant="outlined">
                        <Link to="/practical_consideration" className="decorations">
                            Consideraciones practicas
                        </Link>
                    </Button>
                    <Button variant="outlined">
                        <Link to="/software_requirements_tools" className="decorations">
                            Herramientas del sistema
                        </Link>        
                    </Button> */}
                </Stack>
                 
                
                
                
                
                
                
                
                      
                
            </div>
           
      </div>

    )
}

export default NavBar
