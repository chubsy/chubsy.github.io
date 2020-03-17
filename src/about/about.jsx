import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/about.less';
import meSvg from './img/me.svg';
import dogSvg from './img/dogmomma.svg';
import cookieSvg from './img/cookie.svg';
import lineSvg from './img/line.svg';

class About extends Component {
  componentDidMount() {
    // var path = document.querySelector('.about-line');
    // var length = path.getTotalLength();
    // // Clear any previous transition
    // path.style.transition = path.style.WebkitTransition =
    //   'none';
    // // Set up the starting positions
    // path.style.strokeDasharray = length + ' ' + length;
    // path.style.strokeDashoffset = length;
    // // Trigger a layout so styles are calculated & the browser
    // // picks up the starting position before animating
    // path.getBoundingClientRect();
    // // Define our transition
    // path.style.transition = path.style.WebkitTransition =
    //   'stroke-dashoffset 2s ease-in-out';
    // // Go!
    // path.style.strokeDashoffset = '0';
  }
  render() {
    return (
      <div className="about">
        <img className="about-cookie" src={cookieSvg} />
        <img className="about-me" src={meSvg} />
        <img className="about-dog" src={dogSvg} />
        <img className="about-line-right" src={lineSvg} />
        <img className="about-line-left" src={lineSvg} />
      </div>
    );
  }
}

export default About;
