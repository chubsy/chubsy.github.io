import React, { Component } from 'react';
import LazyLoadImage from "../lazyLoadImage/lazyLoadImage";

import './styles/travelCountryEl.less';

class TravelCountryEl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCity: "",
    };
    this.state.activeCity = Object.keys(this.props.countryData)[0];

    this.createImageEls = this.createImageEls.bind(this);
    this.createFilters = this.createFilters.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const photos = document.querySelector(".travel-modal-photos");
    photos.scrollTo(0, 0);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState ({ activeCity: e.target.innerHTML});
  }

  createFilters() {
    const cityFilterEls = [];
    Object.keys(this.props.countryData).forEach((city, index) => {
      if (index === 0) {
        cityFilterEls.push(
          <button
            key={city}
            onClick={this.handleClick}
            className="travel-modal-city"
            id="default-open">
            {city}
          </button>
        );
      } else {
        cityFilterEls.push(
          <button
            key={city}
            onClick={this.handleClick}
            className="travel-modal-city">
            {city}
          </button>
        );
      }
    });
    return cityFilterEls;
  }

  createImageEls() {
    const imgEls = [];
    this.props.countryData[this.state.activeCity].forEach((img) => {
      imgEls.push(
        <LazyLoadImage
          key={img}
          src={process.env.PUBLIC_URL + `/img/${this.props.currentCountry}/${this.state.activeCity}/${img}`}
          alt="travel-img" />
      );
    });
    return imgEls;
  }

  render() {
    const countryModal = this.createImageEls();
    const cityFilterEls = this.createFilters();
    return (
      <div className="travel-modal-el">
        <div className="travel-modal-tabs">
          {cityFilterEls}
        </div>
        <div className="travel-modal-photos">
          {countryModal}
        </div>
      </div>
    );
  }
}

export default TravelCountryEl;
