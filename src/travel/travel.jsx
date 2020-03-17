import React, { Component } from 'react';

import './styles/travel.less';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import worldData from './initialData';

class Travel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.changeCountry = this.changeCountry.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  changeCountry(polygonTemplate) {
    polygonTemplate.events.on("hit", function(ev) {
      const country = ev.target.dataItem.dataContext.id;
      // if(worldData[country] != undefined) {
      //   Object.keys()
      // }
      console.log(country);
      console.log(worldData[country]);
    });
  }

  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    let map = am4core.create("travel-map", am4maps.MapChart);
    // Set map definition
    map.geodata = am4geodata_worldLow;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    map.maxZoomLevel = 1;
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;

    // Create map polygon series
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    //
    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#BDA0C3");
    this.changeCountry(polygonTemplate);

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#A571B0");
  }

  render() {
    return (
      <div className="travel">
        <div className="travel-description">love the world around you!</div>
        <div className="travel-map"></div>
      </div>

    );
  }
}

export default Travel;
