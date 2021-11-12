import React from 'react'
import {Routes, Route} from "react-router-dom"
import Contac from '../components/Contact';
import About from '../components/About';
import Home from '../components/Home';
import RequerimientosDeSoftware from '../components/datarequirements/RequerimientosDeSoftware';
import FundamentosDelRequerimientoDeSoftware from '../components/datarequirements/FundamentosDelRequerimientoDeSoftware';
import ProcesoDeRequerimientos from '../components/datarequirements/ProcesoDeRequerimientos';
import Elicitacion from '../components/datarequirements/Elicitacion';

const RoutesNav = () => {
    return (
        
        <Routes>
            <Route path="/software_requirements_tools" element= {<Elicitacion/>}/>
            <Route path="/practical_consideration" element= {<Elicitacion/>}/>
            <Route path="/requirements_validation" element= {<Elicitacion/>}/>
            <Route path="/requirements_specification" element= {<Elicitacion/>}/>
            <Route path="/requirements_analysis" element= {<Elicitacion/>}/>
            <Route path="/elicitation" element= {<Elicitacion/>}/>
            <Route path="/software_requirements_process" element= {<ProcesoDeRequerimientos/>}/>
            <Route path="/software_requirements_fundamentals" element= {<FundamentosDelRequerimientoDeSoftware/>}/>
            <Route path="/software_requirements" element= {<RequerimientosDeSoftware/>}/>   
            <Route path="/contact" element= {<Contac/>}/>   
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        
    )
}

export default RoutesNav
