import React, { Component } from 'react';
import EducationProgressBar from './__education__education-progress-bar/education__education-progress-bar';


export class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="education__el education__text">
          <p className="education__text_break">edukacja~</p>
        </div>
        <div className="education__el ">
          <div className="education__content">
            <div className="education__section-name">
              <div className="education__section-name__icon_education"></div>
              <p className="education__section-name__text_education">Moje szkoły</p>
            </div>
            <EducationProgressBar></EducationProgressBar>
          </div>
        </div>
      </div>
    );
  }
}
