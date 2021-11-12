import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contac from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RequerimientosDeSoftware from './components/datarequirements/RequerimientosDeSoftware';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/software_requirements" element= {<RequerimientosDeSoftware/>}/>   
        <Route path="/contact" element= {<Contac/>}/>   
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
        
    </Router> 
     );
}

export default App;
