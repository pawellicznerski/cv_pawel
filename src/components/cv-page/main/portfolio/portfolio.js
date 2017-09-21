import React, { Component } from 'react';
import { SectionElHeader } from './../__section__el_header/section__el_header';

class Project extends Component{
  addMainClass(basicClass){
    return `${basicClass} ${"portfolio__projects__project__main_"+this.props.color}`
  }
  addIconClass(basicClass){
    return `${basicClass} ${"portfolio__projects__project__main__icon_"+this.props.name}`
  }
  render(){
    return(
      <div className="portfolio__projects__project">
        <h2 className="portfolio__projects__project__no">{this.props.no}</h2>
        <div className={this.addMainClass('portfolio__projects__project__main')}>
          <div className={this.addIconClass('portfolio__projects__project__main__icon')}>
            {this.props.text}
          </div>
          <a className="portfolio__projects__project__main__link" href={`https://pawellicznerski.github.io/${this.props.demo}`}>demo</a>
          <a className="portfolio__projects__project__main__link" href={`https://github.com/pawellicznerski/${this.props.code}`}>kod</a>
        </div>
      </div>
    )
  }
}

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__el portfolio__text">
          <p className="portfolio__el portfolio__text_break">portfolio~</p>
        </div>
        <div className="portfolio__el portfolio__content">
          <SectionElHeader text="portfolio" icon="portfolio" colorChange="true"/>
          <div className="portfolio__projects">
            <Project no="5" name="pawellicznerski" text='CV Paweł Licznerski' demo="cv_pawel/" code="cv_pawel" color="olive"/>
            <Project no="4" name="findyourfilm" text='' demo="film-finder/" code="film-finder" color="yellow"/>
            <Project no="3" name="" text='Your todo list...' demo="Todo_List_Project4/" code="Todo_List_Project4" color="orange"/>
            <Project no="2" name="cvproject" text='' demo="CV_project/" code="CV_project" color="grey"/>
            <Project no="1" name="ultramarathon" text='' demo="Ultramarathon_Training_App/" code="Ultramarathon_Training_App" color="green"/>
          </div>
        </div>
      </div>
    );
  }
}
