import React, { Component } from 'react';

class Footer extends Component {
constructor(props){
  super(props);
  this.state={
    isAnimated:false,
  }
  this.handleScroll=this.handleScroll.bind(this);
}

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
        isAnimated:true,
        });
        console.log(this.state.isAnimated);
    }
    // else if(window.scrollY < window.innerHeight-67){
    //   this.setState({
    //     isAnimated:false,
    //     });
    // }
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__section footer__section__left">
          <div className="footer__section__left__word">
            <span
              title="&copy;"
              className={this.state.isAnimated?"footer__section__left__word_letter":"footer__section__left__word_letter_1"}
            >&copy;</span>
          </div>
          <div className="footer__section__left__word">
            <span title="P" className="footer__section__left__word_letter">P</span></div>
          <div className="footer__section__left__word"><span title="a" className="footer__section__left__word_letter">a</span></div>
          <div className="footer__section__left__word"><span title="w" className="footer__section__left__word_letter">w</span></div>
          <div className="footer__section__left__word"><span title="e" className="footer__section__left__word_letter">e</span></div>
          <div className="footer__section__left__word"><span title="ł" className="footer__section__left__word_letter">ł</span></div>
          <div className="footer__section__left__word"><span title="L" className="footer__section__left__word_letter">L</span></div>
          <div className="footer__section__left__word"><span title="i" className="footer__section__left__word_letter">i</span></div>
          <div className="footer__section__left__word"><span title="c" className="footer__section__left__word_letter">c</span></div>
          <div className="footer__section__left__word"><span title="z" className="footer__section__left__word_letter">z</span></div>
          <div className="footer__section__left__word"><span title="n" className="footer__section__left__word_letter">n</span></div>
          <div className="footer__section__left__word"><span title="e" className="footer__section__left__word_letter">e</span></div>
          <div className="footer__section__left__word"><span title="r" className="footer__section__left__word_letter">r</span></div>
          <div className="footer__section__left__word"><span title="s" className="footer__section__left__word_letter">s</span></div>
          <div className="footer__section__left__word"><span title="k" className="footer__section__left__word_letter">k</span></div>
          <div className="footer__section__left__word"><span title="i" className="footer__section__left__word_letter">i</span></div>
        </div>
        <p className="footer__section footer__section__right">
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).
        </p>
      </div>
    );
  }
}

export default Footer;
