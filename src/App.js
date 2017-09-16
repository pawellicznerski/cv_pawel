import React, { Component } from 'react';
import './App.css';
import CVpage from './components/cv-page/cv-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CVpage></CVpage>
      </div>
    );
  }
}

export default App;
