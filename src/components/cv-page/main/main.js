import React, { Component } from 'react';
import { Portfolio } from './portfolio/portfolio.js';
import { Education } from './education/education.js';
import { Experience } from './experience/experience.js';
import { Interests } from './interests/interests.js';
import { Competence } from './competence/competence.js';


class CVPage extends Component {
  render() {
    return (
      <div className="main">
        <Portfolio/>
        <Competence/>
        <Education/>
        <Experience/>
        <Interests/>
      </div>
    );
  }
}

export default CVPage;
