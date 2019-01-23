import React, { Component } from "react";
import ADD from "./images/add.png";
import REMOVE  from "./images/remove.png";
import EDIT from "./images/edit.png";
import style from "./style.css"
class ModifierButton extends Component {
  static get Types() {
    return { ADD, REMOVE, EDIT };
  }
  render() {
    const { type } = { ...this.props };
    return <div className="modifier-button"><img src={type} onClick={this.props.onClick} /></div>;
  }
}

export default ModifierButton;
