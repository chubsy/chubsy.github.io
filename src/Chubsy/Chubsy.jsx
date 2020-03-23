import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Modal from 'react-modal';

import './styles/chubsy.less';

import Home from '../home/home';
import About from '../about/about';
import Travel from '../travel/travel';

class Chubsy extends Component {
  constructor(props) {
    super(props);
    const history = createBrowserHistory();
  }

  render() {
    return (
      <HashRouter history={history} basename={process.env.PUBLIC_URL}>
        <Route render = {({ location }) => (
          <div className="chubsy-wrapper">
            <nav className="chubsy-wrapper-nav">
              <ul className="chubsy-wrapper-ul">
                <li className="chubsy-wrapper-li">
                  <Link to="./">Home</Link>
                </li>
                <li className="chubsy-wrapper-li">
                  <Link to="./about">About</Link>
                </li>
                <li className="chubsy-wrapper-li">
                  <Link to="./travel">Travel</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/travel" component={Travel} />
            </Switch>
          </div>
         )} />
      </HashRouter>
    );
  }
}

export default Chubsy;
