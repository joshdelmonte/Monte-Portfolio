import logo from './logo.svg';
import './App.css';

//Page Imports
import Navbar from './Components/Navbar'
// import Home from "./Pages/Home"
// import Footer from './Components/Footer'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer /> 

    </div>
  );
}

export default App;
