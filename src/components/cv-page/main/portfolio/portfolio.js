import React, { Component } from 'react';
import { SectionElHeader } from './../__section__el_header/section__el_header';

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__el portfolio__text">
          <p className="portfolio__el portfolio__text_break">portfolio~</p>
        </div>
        <div className="portfolio__el portfolio__content">
          <SectionElHeader text="portfolio" icon="portfolio" colorChange="true"/>

        </div>
      </div>
    );
  }
}
