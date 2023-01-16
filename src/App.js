import logo from './logo.svg';
import './App.css';

//Page Imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '.Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About/about';
import Portfolio from '.Pages/Portfolio';
import Contact from '.Pages/Contact';
import Resume from './Resume';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
      {/* Pulled out Home and Footer component from the header element */}
      <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/index.js">
        <Resume />
      </Route>
      <Route path="/">
        <Home /> 
        <Footer />
      </Route>
    </Switch>
</Router>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import Header from './Header';
// import Navigation from './Navigation';
// import AboutMe from './AboutMe';
// import Portfolio from './Portfolio';
// import Contact from './Contact';
// import Resume from './Resume';
// import Footer from './Footer';

// function App() {
//   const [activeSection, setActiveSection] = useState('About Me');

//   return (
//     <div>
//       <Header />
//       <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
//       {activeSection === 'About Me' && <AboutMe />}
//       {activeSection === 'Portfolio' && <Portfolio />}
//       {activeSection === 'Contact' && <Contact />}
//       {activeSection === 'Resume' && <Resume />}
//       <Footer />
//     </div>
//   );
// }

// export default App;
