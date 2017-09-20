import React, { Component } from 'react';
import { SectionElHeader } from './../__section__el_header/section__el_header';

export class Interests extends Component {
  render() {
    return (
      <div className="interests">

        <div className="interests__el interests__text">
          <p className="interests__el interests__text_break">zainteresowania~</p>
        </div>

        <div className="interests__el">
          <div className="interests__content">

            <SectionElHeader text="Moje hobby" icon="interests" colorChange="true"/>

            <div className="interests__cirles">
              <div className="interests__cirles_item interests__cirles_item_dark-main">Front-end
                <div className="interests__cirles_item interests__cirles_item_dark-main_lightest">Ultramaratony rowerowe</div>
                <div className="interests__cirles_item interests__cirles_item_dark-main_light">Muzyka</div>
                <div className="interests__cirles_item interests__cirles_item_dark-main_darkest">Kino</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
