import logo from './logo.svg';
import './App.css';

//Page Imports
import Navbar from './Components/Navbar'
// import Home from "./Pages/Home"
// import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
      {/* Pulled out Home and Footer component from the header element */}
      <Home /> 
      <Footer />
    </div>
  );
}

export default App;
