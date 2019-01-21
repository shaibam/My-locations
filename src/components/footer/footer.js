import React, { Component } from "react";
import FooterButton from "./footerButton";
import LocationsImage from "./images/locations.png";
import CategoriesImage from "./images/categories.png";
import HomeImage from "./images/home.png";
import style from "./style.css";
class Footer extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="footer">
        <FooterButton
          text="Home"
          img={HomeImage}
          url="/"
          selected={this.props.location.pathname === "/"}
        />
        <FooterButton
          text="Categories"
          img={CategoriesImage}
          url="Categories"
          selected={this.props.location.pathname === "/Categories"}
        />
        <FooterButton
          text="Locations"
          img={LocationsImage}
          url="Locations"
          selected={this.props.location.pathname === "/Locations"}
        />
      </div>
    );
  }
}

export default Footer;
