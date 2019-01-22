import React, { Component } from "react";
import Add from "./images/add.png";
import Remove from "./images/remove.png";
import Edit from "./images/edit.png";
import style from "./style.css"
class ModifierButton extends Component {
  static get Types() {
    return { Add, Remove, Edit };
  }
  render() {
    const { type } = { ...this.props };
    return <div className="modifier-button"><img src={type} onClick={this.props.onClick} /></div>;
  }
}

export default ModifierButton;
