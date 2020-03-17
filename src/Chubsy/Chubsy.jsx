import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './styles/chubsy.less';

import Home from '../home/home';
import About from '../about/about';
import Travel from '../travel/travel';

class Chubsy extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="chubsy-wrapper">
          <nav className="chubsy-wrapper-nav">
            <ul className="chubsy-wrapper-ul">
              <li className="chubsy-wrapper-li">
                <Link to="/chubsy">Home</Link>
              </li>
              <li className="chubsy-wrapper-li">
                <Link to="/about">About</Link>
              </li>
              <li className="chubsy-wrapper-li">
                <Link to="/travel">Travel</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/travel">
              <Travel />
            </Route>
            <Route path="/chubsy">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Chubsy;
