import React, { Component } from 'react';


export class Header extends Component {
  render() {
    return (
      <div className="header">

        <div  className="header__el header__pic">
          <div  className="header__pic_style"></div>
        </div>

        <div  className="header__el header__about-me">

          <div className="header__about-me__me">
            <h2 className="header__about-me__me_name"><div className="header__about-me__cv">CV</div>Paweł Licznerski</h2>
            <span className="header__about-me__me_profession">Front-End Developer</span>
          </div>

          <div className="header__about-me__contact-info">
            <div className="header__about-me__contact-info__item">
              <div className="header__about-me__contact-info__item__icon header__about-me__contact-info__item__icon_phone"></div>
                <p className="header__about-me__contact-info__item__text">(+48) 663-969-898</p>
            </div>
            <div className="header__about-me__contact-info__item">
              <div className="header__about-me__contact-info__item__icon header__about-me__contact-info__item__icon_e-mail"></div>
              <a className="header__about-me__contact-info__item__text" href="mailto:pawellicznerski@poczta.fm">pawellicznerski@poczta.fm</a>
            </div>
            <div className="header__about-me__contact-info__item">
              <div className="header__about-me__contact-info__item__icon header__about-me__contact-info__item__icon_address"></div>
              <p className="header__about-me__contact-info__item__text header__about-me__contact-info__item__text_last">87-162 Lubicz Dolny ul.Toruńska 55 (chętnie sie przeprowadzę)</p>
            </div>
          </div>

          <span className="header__about-me__welcome-text">Zapraszam do obejrzenia mojego CV i portfolio</span>
        </div>

      </div>
    );
  }
}


// <div className="header__about-me__contact-info__item">
//   <div className="header__about-me__contact-info__item__icon header__about-me__contact-info__item__icon_birth-date"></div>
//   <p className="header__about-me__contact-info__item__text">12/05/1984</p>
// </div>
