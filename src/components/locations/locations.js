import React, { Component } from "react";
import ModifierList from "../modifierList/modifierList";
import Map from "../map/map";
import style from "./style.css";
import Input from "../Input/input";
import ModifierButton from "../modifiers/modifierButton";

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLocationSelected = data => {
    const address = data.address;
    const lat = data.lat;
    const lon = data.lon;
    this.setState({
      address: `${address.country}, ${address.city}, ${address.road} ${
        address.house_number
      }`,
      lat,
      lon
    });
  };

  render() {
    const { locations } = { ...this.props };
    const { address, lat, lon } = { ...this.state };
    return (
      <div className="locations" ref="locations">
        <ModifierList
          keyPrefix="location"
          data={locations}
          onChange={this.onEdit}
          onRemove={this.onRemove}
        />
        <div className="location-details">
          <Map locationSelected={this.onLocationSelected} />
          <ul>
            <li>
              <Input value={""} placeholder={"Enter location name"}/>
            </li>
            <li>
              <Input value={""} placeholder={"Enter location category"} />
            </li>
            <li>
              <Input value={address} disabled={true} />
            </li>
            <li>
              <Input value={lat} disabled={true} />
            </li>
            <li>
              <Input value={lon} disabled={true} />
            </li>
          </ul>
          Add to your locations
          <ModifierButton type={ModifierButton.Types.ADD}/>
        </div>
      </div>
    );
  }
}

export default Locations;
