import React, { Component } from 'react';
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyload";

class LazyLoadImage extends Component {
  // Update lazyLoad after first rendering of every image
  constructor(props) {
    super(props);
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
    }
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    const { alt, src } = this.props;
    return (
      <img
        alt={alt}
        className="travel-modal-img"
        data-src={src}
      />
    );
  }
}

export default LazyLoadImage;
