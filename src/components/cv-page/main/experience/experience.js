import React, { Component } from 'react';
import { SectionElHeader } from './../__section__el_header/section__el_header';

class Job extends Component {
  addClasses(basicClass){
    return `${basicClass} ${"experience__content__section__el__text_arrow_"+this.props.arrow}`
  }
  render() {
    return (
      <div className="experience__content__section__el">
        <p className="experience__content__section__el__text_title">{this.props.company}</p>
        <p className="experience__content__section__el__text_main">{this.props.duties}</p>
        <span className={this.addClasses("experience__content__section__el__text_arrow")}></span>
        <p className="experience__content__section__el__text_date">{this.props.year}</p>
      </div>
    );
  }
}

export class Experience extends Component {
  render() {
    return (
      <div className="experience">

        <div className="experience__el experience__text">
          <p className="experience__el experience__text_break">doświadczenie~</p>
        </div>

        <div className="experience__el  experience__content">

          <SectionElHeader text="Moja praca" icon="experience" colorChange="false"/>

          <div className="experience__content__chart">
            <div className="experience__content__section experience__content__section_left">
              <Job company="Manpower/Sharp Polska" year="2011 - 2012" arrow="left"
                duties="Kontroler jakości: kontrolowanie prawidłowości procesu produkcji i jakości komponentów do telewizorów."
                />
              <Job company="Esada Błażej Martuszewski" year="2013 - 2016" arrow="left"
                duties="Logistyk/operator vendingowy: zamawianie towaru, organizacja pracy pracowników."
                />
            </div>
            <div className="experience__content__section experience__content__section_right">
              <Job company="Własna firma P.H. Paweł Licznerski" year="2012 - 2013" arrow="right"
                duties="Firma vendingowa jednoosobowa, zajmująca się sprzedażą kanapek z automatów."
                />
              <Job company="Limito S.A." year="2016 - 2017" arrow="right"
                duties="Spec. ds. zakupów: dokonywanie zakupów opakowao do łososia, negocjacja cen."
                />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
