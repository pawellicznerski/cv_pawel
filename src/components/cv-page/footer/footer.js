import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__section footer__section__left">
          <div className="footer__section__left__word"><span className="footer__section__left__word_syllable">&copy;</span></div>
          <div className="footer__section__left__word"><span className="footer__section__left__word_syllable">Pa</span></div>
          <div className="footer__section__left__word"><span className="footer__section__left__word_syllable">weł</span></div>
          <div className="footer__section__left__word"><span className="footer__section__left__word_syllable">Li</span></div>
          <div className="footer__section__left__word"><span className="footer__section__left__word_syllable">czner</span></div>
          <div className="footer__section__left__word"><span className="footer__section__left__word_syllable">ski</span></div>
        </div>
        <p className="footer__section footer__section__right">
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).
        </p>
      </div>
    );
  }
}

export default Footer;
