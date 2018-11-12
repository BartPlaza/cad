import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from "./components/Navigation/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
