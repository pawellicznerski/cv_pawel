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
              <p className="header__contact-info__item__text">12/05/1984</p>
              <div className="header__contact-info__item__icon header__contact-info__item__icon_birth-date"></div>
            </div>
            <div className="header__contact-info__item">
              <p className="header__contact-info__item__text">(+48) 663-969-898</p>
              <div className="header__contact-info__item__icon header__contact-info__item__icon_phone"></div>
            </div>
            <div className="header__contact-info__item">
              <p className="header__contact-info__item__text">pawellicznerski@poczta.fm</p>
              <div className="header__contact-info__item__icon header__contact-info__item__icon_e-mail"></div>
            </div>
            <div className="header__contact-info__item">
              <p className="header__contact-info__item__text header__contact-info__item__text_last">87-162 Lubicz Dolny ul.toruńska 55 (Chetnie sie przeprowadzę )</p>
              <div className="header__contact-info__item__icon header__contact-info__item__icon_address"></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
