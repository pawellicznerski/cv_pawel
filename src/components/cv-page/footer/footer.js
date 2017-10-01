import React, { Component } from 'react';

class AniFooter extends Component{
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
      window.removeEventListener('scroll', this.handleScroll);
          console.log(this.state.isAnimated);
      }
    }

  render(){
    if(this.props.letter){
      return(
        <div className="footer__section__left__word">
          <span
            title={`${this.props.letter}`}
            className={this.state.isAnimated?`footer__section__left__word_letter footer__section__left__word_letter_${this.props.time}`:"footer__section__left__word_letter"}
            >{this.props.letter}</span>
        </div>
      )
    } else if (this.props.side){
      return(
        <span
          className={this.state.isAnimated?`footer__section__right__tick-box__border footer__section__right__tick-box__border_${this.props.side}`:"footer__section__right__tick-box__border"}
        ></span>
      )
    } else if (this.props.tick){
      return(
        <div className={this.state.isAnimated?"footer__section__right__tick-box__tick":""}></div>
      )
    }
  }
}

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__section footer__section__left">
          <AniFooter animateTick={this.animateTick} time="4" letter="&copy;"/>
          <AniFooter time="1" letter="P"/>
          <AniFooter time="7" letter="a"/>
          <AniFooter time="5" letter="w"/>
          <AniFooter time="2" letter="e"/>
          <AniFooter time="1" letter="ł"/>
          <AniFooter time="8" letter="L"/>
          <AniFooter time="3" letter="i"/>
          <AniFooter time="6" letter="c"/>
          <AniFooter time="4" letter="z"/>
          <AniFooter time="5" letter="n"/>
          <AniFooter time="1" letter="e"/>
          <AniFooter time="8" letter="r"/>
          <AniFooter time="4" letter="s"/>
          <AniFooter time="2" letter="k"/>
          <AniFooter time="1" letter="i"/>
        </div>
        <div className="footer__section footer__section__right">
          <div className="footer__section__right__tick-box">
            <AniFooter side="1"/>
            <AniFooter side="2"/>
            <AniFooter side="3"/>
            <AniFooter side="4"/>
            <AniFooter tick="true"/>
          </div>
          <p className="footer__section__right__text">
            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).
          </p>
        </div>
      </div>
    );
  }
}
