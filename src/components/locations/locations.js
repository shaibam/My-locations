import React, { Component } from "react";
import { Map, mapElement } from "../map/map";
import style from "./style.css";
class Locations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className ="locations" ref="locations">
        Locations
        <div id="map" ref="map" ></div>
      </div>
    );
  }

  componentDidMount() {    
    const accessToken =
      "pk.eyJ1Ijoic2hhaWJhbSIsImEiOiJjanI3Nmhnc2ExeDhoNDlycGE3b21nMHQwIn0.0QdR8vTpTWblJev_ZdjPiw";
    var mymap = window["L"].map("map").setView([51.505, -0.09], 13);
    window["L"].tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken
      }
    ).addTo(mymap);
    console.log(window.L);
  }

  componentWillUnmount() {}
}

export default Locations;
