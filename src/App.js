import logo from './logo.svg';
import './App.css';

//Page Imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
      {/* Pulled out Home and Footer component from the header element */}
      <Router>
        <Routes>
          <Route path="/Pages/Home">
            <Home /> 
          </Route>
          <Route path="/Pages/About">
            <About />
          </Route>
          <Route path="/Pages/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Pages/Contact">
            <Contact />
          </Route>
          <Route path="/Pages/Resume">
            <Resume />
          </Route>
          <Route path="/">
            <Footer />
          </Route>
        </Routes>
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
