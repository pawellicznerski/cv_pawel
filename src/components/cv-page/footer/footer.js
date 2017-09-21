import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer__section footer__section_left">
          &copy; Paweł Licznerski
        </p>
        <p className="footer__section footer__section_right">
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922). 
        </p>
      </div>
    );
  }
}

export default Footer;
