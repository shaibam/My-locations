import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./style.css";
class FooterButton extends Component {
  render() {
    const { text, img, url } = { ...this.props };    
    return (
      <div className="link">
        <Link to={url} >
          <span>{text}</span>
          <img src={img} />
        </Link>
      </div>
    );
  }
}

export default FooterButton;
