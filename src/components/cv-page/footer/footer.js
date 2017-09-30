import React, { Component } from 'react';

class AniLetter extends Component{
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
    console.log(document.body.scrollHeight);

    e.preventDefault();
      if (window.scrollY > document.body.scrollHeight-800) {
        this.setState({
          isAnimated:true,
          });
      this.props.animateTick().bind(this);
      window.removeEventListener('scroll', this.handleScroll);
          console.log(this.state.isAnimated);
      }
    }

  render(){
    return(
      <div className="footer__section__left__word">
        <span
          title={`${this.props.letter}`}
          className={this.state.isAnimated?`footer__section__left__word_letter footer__section__left__word_letter_${this.props.time}`:"footer__section__left__word_letter"}
          >{this.props.letter}</span>
      </div>
    )
  }
}

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      isAnimated:false,
    }
  }

  animateTick(){
    this.setState({
      isAnimated:true,
    })
  }
  render() {
    return (
      <div className="footer">
        <div className="footer__section footer__section__left">
          <AniLetter animateTick={this.animateTick.bind(this)} time="4" letter="&copy;"/>
          <AniLetter time="1" letter="P"/>
          <AniLetter time="7" letter="a"/>
          <AniLetter time="5" letter="w"/>
          <AniLetter time="2" letter="e"/>
          <AniLetter time="1" letter="ł"/>
          <AniLetter time="8" letter="L"/>
          <AniLetter time="3" letter="i"/>
          <AniLetter time="6" letter="c"/>
          <AniLetter time="4" letter="z"/>
          <AniLetter time="5" letter="n"/>
          <AniLetter time="1" letter="e"/>
          <AniLetter time="8" letter="r"/>
          <AniLetter time="4" letter="s"/>
          <AniLetter time="2" letter="k"/>
          <AniLetter time="1" letter="i"/>
        </div>
        <div className="footer__section footer__section__right">
          <div className="footer__section__right__tick-box">
            <span
              className={this.state.isAnimated?`footer__section__right__tick-box__border footer__section__right__tick-box__border_1`:"footer__section__right__tick-box__border"}
            ></span>
            <span
              className={this.state.isAnimated?`footer__section__right__tick-box__border footer__section__right__tick-box__border_2`:"footer__section__right__tick-box__border"}
            ></span>
            <span
              className={this.state.isAnimated?`footer__section__right__tick-box__border footer__section__right__tick-box__border_3`:"footer__section__right__tick-box__border"}
            ></span>
            <span
              className={this.state.isAnimated?`footer__section__right__tick-box__border footer__section__right__tick-box__border_4`:"footer__section__right__tick-box__border"}
            ></span>
            <div className={this.state.isAnimated?"footer__section__right__tick-box__tick":""}></div>
          </div>
          <p className="footer__section__right__text">
            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).
          </p>
        </div>
      </div>
    );
  }
}
