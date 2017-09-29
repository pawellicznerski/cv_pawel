import React, { Component } from 'react';

componentDidMount(){
  window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(e){
  e.preventDefault();
      if (window.scrollY > window.innerHeight-67) {
        this.setState({
          topScrollBtn:true,
          });
      } else if(window.scrollY < window.innerHeight-67){
        this.setState({
          topScrollBtn:false,
          });
      }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__section footer__section__left">
          <div className="footer__section__left__word"><span title="&copy;" className="footer__section__left__word_syllable">&copy;</span></div>
          <div className="footer__section__left__word"><span title="P" className="footer__section__left__word_syllable"> P</span></div>
          <div className="footer__section__left__word"><span title="a" className="footer__section__left__word_syllable">a</span></div>
          <div className="footer__section__left__word"><span title="w" className="footer__section__left__word_syllable"> w</span></div>
          <div className="footer__section__left__word"><span title="e" className="footer__section__left__word_syllable">e</span></div>
          <div className="footer__section__left__word"><span title="ł" className="footer__section__left__word_syllable">ł</span></div>
          <div className="footer__section__left__word"><span title="L" className="footer__section__left__word_syllable">L</span></div>
          <div className="footer__section__left__word"><span title="i" className="footer__section__left__word_syllable">i</span></div>
          <div className="footer__section__left__word"><span title="c" className="footer__section__left__word_syllable">c</span></div>
          <div className="footer__section__left__word"><span title="z" className="footer__section__left__word_syllable">z</span></div>
          <div className="footer__section__left__word"><span title="n" className="footer__section__left__word_syllable">n</span></div>
          <div className="footer__section__left__word"><span title="e" className="footer__section__left__word_syllable">e</span></div>
          <div className="footer__section__left__word"><span title="r" className="footer__section__left__word_syllable">r</span></div>
          <div className="footer__section__left__word"><span title="s" className="footer__section__left__word_syllable">s</span></div>
          <div className="footer__section__left__word"><span title="k" className="footer__section__left__word_syllable">k</span></div>
          <div className="footer__section__left__word"><span title="i" className="footer__section__left__word_syllable">i</span></div>
        </div>
        <p className="footer__section footer__section__right">
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).
        </p>
      </div>
    );
  }
}

export default Footer;
