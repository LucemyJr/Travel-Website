import './App.css';
import {Route, Routes,} from "react-router-dom"
import Home from './Components/Routes/Home';
import Contact from './Components/Routes/Contact';
import Service from './Components/Routes/Service';
import About from './Components/Routes/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
