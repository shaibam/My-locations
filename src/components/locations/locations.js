import React, { Component } from "react";
import ModifierList from "../modifierList/modifierList";
import Map from "../map/map";
import style from "./style.css";
import Input from "../Input/input";
import ModifierButton from "../modifiers/modifierButton";
import { connect } from "react-redux";
import { Add, Get, Remove, Edit } from "../../redux/actions/locationActions";

const mapStateToProps = state => {
  return { locations: state.locations };
};

const mapActionsToProps = {
  Add,
  Remove,
  Get,
  Edit
};

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.Get();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.Add({ ...this.state });
  };

  handleNameChange = name => {
    this.setState({ name });
  };

  onEdit =() => {
    console.log("Edit isnt available");
  }

  onRemove =() => {
    console.log("Remove isnt available");
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
    console.log(locations);
    var locationNames;
    if (locations) {
      locationNames = locations.map(e => {
        return e.name;
      });
    }
    const { address, lat, lon, name } = { ...this.state };
    return (
      <div className="locations" ref="locations">
        <div className="location-list">
          <ModifierList
            keyPrefix="location"
            data={locations && locationNames}
            onChange={this.onEdit}
            onRemove={this.onRemove}
          />
        </div>
        <div className="location-details">
          <Map locationSelected={this.onLocationSelected} />
          <ul>
            <li>
              <Input
                value={""}
                placeholder={"Enter location name"}
                onChange={this.handleNameChange}
              />
            </li>
            <li>
              <Input
                value={""}
                placeholder={"Enter location category"}
                onChange={this.handleCategory}
              />
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
          <ModifierButton
            type={ModifierButton.Types.ADD}
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Locations);
