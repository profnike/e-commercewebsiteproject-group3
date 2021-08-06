import React from 'react';
import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom'
import Homepage from  './pages/Homepage'
import About from './pages/About';
import Arrivals from './pages/Arrivals';
import Services from './components/Services/index';
import Description from './pages/Description';
import DescriptionB from './pages/DescriptionB';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
//import './style/Checkout.css'
import './style/About.css'
import './style/Signup.css'
import './style/Services.css'
import './style/Arrivals.css'
// import Navbar from './components/Navbar'; 
import { Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/new-arrivals#head" ><Arrivals/></Route>
      <Route exact path="/" ><Homepage/></Route>
      <Route exact path="/new-arrivals" ><Arrivals/></Route>
      <Route exact path="/about" ><About/></Route> 
      <Route exact path="/services" ><Services/></Route> 
      <Route exact path="/signup" ><Signup/></Route>
      <Route exact path="/contact" ><Contact/></Route>
      <Route exact path="/checkout" ><Checkout/></Route> 
      <Route exact path="/description/:id" ><Description/></Route> 
      <Route exact path="/descriptionB/:id" ><DescriptionB/></Route>
     </Switch>
    </div>
    
  );
}

export default App;
