import React, { Component } from 'react';
import { SectionElHeader } from './../__section__el_header/section__el_header';

class Bar extends Component {
  render() {
    return (
      <div className="competence-bars__el">
        <p className="competence-bars__el__text">{this.props.name}</p>
        <div className="competence-bars__el__bar">
          <div className={this.props.classes}></div>
        </div>
      </div>
    );
  }
}

export class Competence extends Component {
  render() {
    return (
      <div className="competence">

        <div className="competence__el competence__text">
          <p className="competence__text_break">potrafię~</p>
        </div>

        <div className="competence__el competence__content">
          <SectionElHeader text="Moje umiejętności" icon="competence" colorChange="false"/>
          <div className="competence-bars">
            <Bar name="Angielski" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_first"}></Bar>
            <Bar name="HTML/CSS" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_second"}></Bar>
            <Bar name="Javascript" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_third"}></Bar>
            <Bar name="React.js" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_fourth"}></Bar>
            <Bar name="Sass/RWD/BEM" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_fifth"}></Bar>
            <Bar name="jQuery" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_sixth"}></Bar>
            <Bar name="Webpack/GIT" classes={"competence-bars__el__bar_filling competence-bars__el__bar_filling_last"}></Bar>
          </div>
        </div>

      </div>
    );
  }
}
