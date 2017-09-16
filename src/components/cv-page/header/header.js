import React, { Component } from 'react';


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div  className="header__el header__pic"></div>
        <div  className="header__el header__about-me">
          <div>
            <h2>Paweł Licznerski</h2>
            <h5>Front-End Developer</h5>
          </div>

          <div className="header__contact-info">
            <div className="header__contact-info__item">
              <div className="header__contact-info__item__icon header__contact-info__item__icon_birth-date"></div>
              <p className="header__contact-info__item__text">12/05/1984</p>
            </div>
            <div className="header__contact-info__item">
              <div className="header__contact-info__item__icon header__contact-info__item__icon_phone"></div>
                <p className="header__contact-info__item__text">(+48) 663-969-898</p>
            </div>
            <div className="header__contact-info__item">
              <div className="header__contact-info__item__icon header__contact-info__item__icon_e-mail"></div>
              <a className="header__contact-info__item__text" href="mailto:pawellicznerski@poczta.fm">pawellicznerski@poczta.fm</a>
            </div>
            <div className="header__contact-info__item">
              <div className="header__contact-info__item__icon header__contact-info__item__icon_address"></div>
              <p className="header__contact-info__item__text header__contact-info__item__text_last">87-162 Lubicz Dolny ul.toruńska 55 (chętnie sie przeprowadzę)</p>
            </div>
          </div>

          <h5>Zapraszam do obejżenia mojego CV i portfolio</h5>

        </div>
      </div>
    );
  }
}
