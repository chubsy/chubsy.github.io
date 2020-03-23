import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/about.less';
import '../global/global.less';
import meSvg from './img/me.svg';
import EngineerIcon from './engineerIcon';
import CookieIcon from './cookieIcon';
import JournalIcon from './journalIcon';
import DogIcon from './dogIcon';

class About extends Component {
  render() {
    return (
      <div className="about">
          <img className="about-me" src={meSvg} />
          <div className="about-header">
            hello! my name is chloe, and I am a
          </div>
          <div className="about-icons">
            <EngineerIcon />
            <CookieIcon />
            <DogIcon />
            <JournalIcon />
          </div>
          <div className="about-title">
            <div className="about-icon">software engineer</div>
            <div className="about-icon cookie">bakery owner</div>
            <div className="about-icon">dog momma</div>
            <div className="about-icon">bullet journaler</div>
          </div>
      </div>
    );
  }
}

export default About;
