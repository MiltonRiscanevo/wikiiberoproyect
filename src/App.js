import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import NavBar from './components/NavBar';
import RoutesNav from './routes/RoutesNav';



function App() {
  return (
    <Router>
      <NavBar/>
      <RoutesNav/>
      
        
    </Router> 
     );
}

export default App;
