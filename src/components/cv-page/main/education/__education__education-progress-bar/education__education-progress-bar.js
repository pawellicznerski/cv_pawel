import React, { Component } from 'react';
// import BarAndDates from './__education__education-progress-bar__bar-and-dates/education__education-progress-bar__bar-and-dates.js';


class EducationProgressBar extends Component {
  render() {
    return (
    <div className="education__education-progress-bar">

      <ul className="education__education-progress-bar__el">
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">Liceum handlowe w Toruniu</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <strong className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_color-background ">NKJO w Toruniu</strong>
        </li>
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">UMK, Filologia angielska, lingwistyka</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <strong className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_color-background">Coders Lab</strong>
        </li>
      </ul>

      <ul className="education__education-progress-bar__el">
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_0">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text__circle-0">Czerwiec 2005</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_1">
          <p className="education__education-progress-bar__el__item__text  education__education-progress-bar__el__item__text__circle-1">Czerwiec 2009</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_2">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text__circle-2">Lipiec 2015</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_line education__education-progress-bar__el__item_line_last">
          <p className="education__education-progress-bar__el__item__text  education__education-progress-bar__el__item__text__circle-3">Marzec 2017</p>
        </li>
      </ul>

      <ul className="education__education-progress-bar__el education__education-progress-bar__el_last">
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <p className="education__education-progress-bar__el__item__text education__education-progress-bar__el__item__text_color-background"><span className="education__education-progress-bar__el__item__text_color-background_strong">Technik</span> Spec. handel</p>
        </li>
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">Nauczyciel jęz. angielskiego</p>
        </li>
        <li className="education__education-progress-bar__el__item education__education-progress-bar__el__item_color-background">
          <p className="education__education-progress-bar__el__item__text_color-background"><span className="education__education-progress-bar__el__item__text_color-background_strong">Magister</span> jęz. angielski</p>
        </li>
        <li className="education__education-progress-bar__el__item">
          <p className="education__education-progress-bar__el__item__text">Dyplom Front-end with React</p>
        </li>
      </ul>

    </div>
    );
  }
}

export default EducationProgressBar;
