import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const handleClick = () => {
  document.getElementById("para").style.display = "block";
  }

  return (
    <div id="main">
      // Do not alter the main div
      <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleClick}>Click me</button>
    </div>
  );
}


export default App;
