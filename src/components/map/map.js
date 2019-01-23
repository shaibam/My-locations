import React, { Component } from "react";
import ReactDOM from "react-dom";
const mapElement = document.querySelector("#map");
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" ref="map" />;
  }

  componentDidMount() {
    const accessToken =
      "pk.eyJ1Ijoic2hhaWJhbSIsImEiOiJjanI3Nmhnc2ExeDhoNDlycGE3b21nMHQwIn0.0QdR8vTpTWblJev_ZdjPiw";
    this.mymap = window["L"].map("map").setView([51.505, -0.09], 13);
    window["L"]
      .tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken
        }
      )
      .addTo(this.mymap);

    this.mymap.on("click", e => {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {          
          window["L"].marker([lat, lon]).addTo(this.mymap);
          this.props.locationSelected(data);
        });
    });
  }

  componentWillUnmount() {
    this.mymap.remove();
  }
}

export default Map;
