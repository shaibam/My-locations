import React, { Component } from "react";
import style from "./style.css";
class Body extends Component {
  render() {
    const Children = this.props.children;
    return (
      <div className="body">
        {Children}
      </div>
    );
  }
}

export default Body;
