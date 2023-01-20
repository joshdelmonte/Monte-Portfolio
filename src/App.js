import profile_picture from './Assets/images/profile_picture.jpg';
import './App.css';
// import MyNavbar from '../../Components/Navbar';
//Page Imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MyNavbar from './Components/Navbar';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Footer from './Components/Footer/footer';

function App() {
  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <img src={profile_picture} className="App-logo" alt="logo" />

          <MyNavbar />
        </header>      {/* Pulled out Home and Footer component from the header element */}

        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
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
