import React, { Component } from 'react';
import { Portfolio } from './portfolio/portfolio.js';


class CVPage extends Component {
  render() {
    return (
      <div className="main">
        <Portfolio/>
      </div>
    );
  }
}

export default CVPage;
