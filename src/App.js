import './App.css';
import { Route,Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';

function App(){
  return (<div>

    <Navbar/>

    <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/Service" element={<Service></Service>}/>
    <Route path="/About" element={<About></About>}/>

    </Routes>

 </div> )
}

export default App;
