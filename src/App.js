import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Arrivals from './pages/Arrivals';
import Services from './pages/Services';
import Signup from './pages/Signup';
import './style/Arrivals.css'
import './style/About.css'
import './style/Signup.css'
import './style/Services.css'
import Navbar from './components/Navbar';
  
import { Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Switch>
    
      <Route exact path="/" ><Homepage/></Route>
     <Route exact path="/new-arrivals" ><Arrivals/></Route>
      <Route exact path="/about" ><About/></Route> 
      <Route exact path="/services" ><Services/></Route> 
      <Route exact path="/signup" ><Signup/></Route> 
      
      
      </Switch>
     
    </div>
    
  );
}

export default App;
