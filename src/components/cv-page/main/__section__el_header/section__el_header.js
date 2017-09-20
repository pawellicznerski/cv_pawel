import React, {Component} from 'react';

export class SectionElHeader extends Component {
  setIconClasses(){
    return `section-el-header__icon ${"section-el-header__icon_"+this.props.icon}`
  }
  setTextClasses(){
    return `section-el-header__text ${this.props.colorChange==='true'?"section-el-header__text_color-change":''}`
  }
  render(){
    return(
      <div className=" section-el-header">
        <div className={this.setIconClasses()}></div>
        <p className={this.setTextClasses()}>{this.props.text}</p>
      </div>
    )
  }
}
