import React, { Component } from 'react';
import Modal from 'react-modal';
import TravelCountryEl from './src/travelCountryEl/travelCountryEl';

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
      showModal: false,
      showCountry: "",
    };

    this.changeCountry = this.changeCountry.bind(this);
    this.createModal = this.createModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

    polygonSeries.data = [{
      "id": "US",
      "selected": true
    }, {
      "id": "JP",
      "selected": true
    }, {
      "id": "CN",
      "selected": true
    }, {
      "id": "ID",
      "selected": true
    }, {
      "id": "FR",
      "selected": true
    }, {
      "id": "TW",
      "selected": true
    }, {
      "id": "IT",
      "selected": true
    }, {
      "id": "ES",
      "selected": true
    }, {
      "id": "GR",
      "selected": true
    }, {
      "id": "GB",
      "selected": true
    }, {
      "id": "CH",
      "selected": true
    }, {
      "id": "NL",
      "selected": true
    }, {
      "id": "TH",
      "selected": true
    }, {
      "id": "MX",
      "selected": true
    }, {
      "id": "KR",
      "selected": true
    }, {
      "id": "CA",
      "selected": true
    }, {
      "id": "DK",
      "selected": true
    }];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#CCBBCE");
    this.changeCountry(polygonTemplate);

    polygonTemplate.adapter.add("fill", function(fill, target) {
      if (target.dataItem.dataContext && target.dataItem.dataContext.selected) {
        return am4core.color("#A571B0");
      }
      return fill;
    });
  }

  changeCountry(polygonTemplate) {
    const self = this;
    polygonTemplate.events.on("hit", function(ev) {
      const country = ev.target.dataItem.dataContext.id;
      if(worldData[country] != undefined) {
        self.setState({
          showModal : true,
          showCountry: country,
        });
      }
    });
  }

  createModal() {
    return (
      <Modal
        className="travel-modal"
        isOpen={this.state.showModal}
        onRequestClose={this.hideModal}
        contentLabel="Example Modal"
      >
        <TravelCountryEl
          countryData={worldData[this.state.showCountry]}
          currentCountry={this.state.showCountry}
        />
      </Modal>
    );
  }

 hideModal() {
   this.setState({ showModal: false });
 }

  render() {
    const countryModal = this.state.showModal ? this.createModal() : "";
    return (
      <div className="travel">
        <div className="travel-description">love the world around you!</div>
        <div className="travel-map"></div>
        {countryModal}
      </div>
    );
  }
}

export default Travel;
