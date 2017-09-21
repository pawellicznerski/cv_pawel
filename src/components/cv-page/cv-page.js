import React, { Component } from 'react';
import {Header} from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';


class CVPage extends Component {
  render() {
    return (
      <div className="page">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default CVPage;
