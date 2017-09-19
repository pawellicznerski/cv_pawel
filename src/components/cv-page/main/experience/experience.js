import React, { Component } from 'react';


export class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="experience__el experience__text">
          <p className="experience__el experience__text_break">doświadczenie~</p>
        </div>

        <div className="experience__el  experience2">

          <div className="experience2__section-name">
            <div className="experience2__section-name__icon_experience2"></div>
            <p className="experience2__section-name__text_experience2">Moja praca</p>
          </div>

          <div className="experience2__chart">
            <div className="experience2__section experience2__section_left">

              <div className="experience2__section__el">
                <p className="experience2__section__el__text_title">Manpower/Sharp Polska</p>
                <p className="experience2__section__el__text_main">Kontroler jakości: kontrolowanie prawidłowości procesu produkcji i jakości komponentów do telewizorów.</p>
                <span className="experience2__section__el__text_arrow experience2__section__el__text_arrow_left"></span>
                <div className="experience2__section__el__text_date">
                  <p className="experience2__section__el__text_date_year">2011-2012</p>
                </div>
              </div>

              <div className="experience2__section__el experience2__section__el_left">
                <p className="experience2__section__el__text_title">Esada Błażej Martuszewski</p>
                <p className="experience2__section__el__text_main">Logistyk/operator vendingowy: zamawianie towaru, organizacja pracy pracowników.</p>
                <span className="experience2__section__el__text_arrow experience2__section__el__text_arrow_left"></span>
                <div className="experience2__section__el__text_date">
                  <p className="experience2__section__el__text_date_year">2013-2016</p>
                </div>
              </div>

            </div>

            <div className="experience2__section experience2__section_right">
              <div className="experience2__section__el experience2__section__el_right">
                <p className="experience2__section__el__text_title">Własna firma P.H. Paweł Licznerski</p>
                <p className="experience2__section__el__text_main">Firma vendingowa jednoosobowa, zajmująca się sprzedażą kanapek z automatów.</p>
                <span className="experience2__section__el__text_arrow experience2__section__el__text_arrow_right"></span>
                <div className="experience2__section__el__text_date">
                  <p className="experience2__section__el__text_date_year">2012-2013</p>
                </div>
              </div>

              <div className="experience2__section__el experience2__section__el_right">
                <p className="experience2__section__el__text_title">Limito S.A.</p>
                <p className="experience2__section__el__text_main">Spec. ds. zakupów: dokonywanie zakupów opakowao do łososia, negocjacja cen.</p>
                <span className="experience2__section__el__text_arrow experience2__section__el__text_arrow_right"></span>
                <div className="experience2__section__el__text_date">
                  <p className="experience2__section__el__text_date_year">2016-2017</p>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    );
  }
}
