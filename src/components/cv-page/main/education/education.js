import React, { Component } from 'react';
import EducationProgressBar from './__education__education-progress-bar/education__education-progress-bar';
import { SectionElHeader } from './../__section__el_header/section__el_header';

export class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="education__el education__text">
          <p className="education__text_break">edukacja~</p>
        </div>
        <div className="education__el ">
          <div className="education__content">
            <SectionElHeader text="Moje szkoły" icon="education" colorChange="true"/>
            <EducationProgressBar></EducationProgressBar>
          </div>
        </div>
      </div>
    );
  }
}
