import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyHomePage() {
  const [name, setName] = useState("Josh Delmonte");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <input type="text" placeholder="Enter your name" onChange={handleChange} value={name} />
      <br />
      <Link to={`/greet/${name}`}>
        <button>Go to Greeting</button>
      </Link>
    </div>
  );
}

export default MyHomePage;