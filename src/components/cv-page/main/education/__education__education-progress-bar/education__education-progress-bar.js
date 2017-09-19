import React, { Component } from 'react';
// import BarAndDates from './__education__education-progress-bar__bar-and-dates/education__education-progress-bar__bar-and-dates.js';

class ProgressBarText extends Component {
  addClasses(basicClass){
    return `${basicClass} ${this.props.background==="true"? "education__education-progress-bar__el__item__text_color-background" :''}`
  }
  render() {
    return (
      <li className="education__education-progress-bar__el__item">
        <p className={this.addClasses("education__education-progress-bar__el__item__text")}>{this.props.text}</p>
      </li>
    );
  }
}
class ProgressBarLineAndDate extends Component {
  addClasses(firstText, secondText){
    const secondTextUpdated = `${secondText+this.props.linePosition}`
    return `${firstText} ${secondTextUpdated}`
  }
  render() {
    return (
      <li className={this.addClasses("education__education-progress-bar__el__item education__education-progress-bar__el__item_line","education__education-progress-bar__el__item_line_")}>
        <p className={this.addClasses("education__education-progress-bar__el__item__text","education__education-progress-bar__el__item__text__circle-")}>
          {this.props.text}</p>
      </li>
    );
  }
}

export default class EducationProgressBar extends Component {
  render() {
    return (
    <div className="education__education-progress-bar">
      <ul className="education__education-progress-bar__el">
        <ProgressBarText text="Liceum handlowe w Toruniu" background="false"/>
        <ProgressBarText text="NKJO w Toruniu" background="true"/>
        <ProgressBarText text="UMK, Filologia angielska, lingwistyka" background="false"/>
        <ProgressBarText text="Coders Lab" background="true"/>
      </ul>

      <ul className="education__education-progress-bar__el">
        <ProgressBarLineAndDate linePosition="0" text="Czerwiec 2005"/>
        <ProgressBarLineAndDate linePosition="1" text="Czerwiec 2009"/>
        <ProgressBarLineAndDate linePosition="2" text="Lipiec 2015"/>
        <ProgressBarLineAndDate linePosition="3" text="Marzec 2017"/>
      </ul>

      <ul className="education__education-progress-bar__el education__education-progress-bar__el_last">
        <ProgressBarText text="Technik Spec. handel" background="true"/>
        <ProgressBarText text="Nauczyciel jęz. ang." background="false"/>
        <ProgressBarText text="Magister jęz. angielski" background="true"/>
        <ProgressBarText text="Dyplom Front-end with React" background="false"/>
      </ul>

    </div>
    );
  }
}
