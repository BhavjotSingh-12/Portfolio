import logo from './logo.svg';
import './App.css';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import Resume from './Components/Resume';
import Navbar from './Components/Navbar';

function App() {
  return (

    <HashRouter>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>
        <Route path="/Projects" exact element={<Projects/>}/>
        <Route path="/Resume" exact element={<Resume/>}/>

       
      </Routes>
    </HashRouter>

  )
}

export default App;
