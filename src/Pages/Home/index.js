import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyNavbar from '../Components/MyNavbar';

function MyHomePage() {
  const [name, setName] = useState("Josh Delmonte");

  function handleChange(event) {
    setName(event.target.value);
  }
  
  return (
    <div>
      <MyNavbar />
      <h1>Josh Delmonte</h1>
      <h2>Homepage</h2>
     
      <Link to={`/greet/${name}`}>
        <button>Go to Greeting</button>
      </Link>
      
      
    </div>
  );
}

export default MyHomePage;