import React, { Component } from "react";
import ReactDOM from "react-dom";
const mapElement = document.querySelector("#map");
class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    mapElement.style.display = "block";
  }

  componentWillUnmount() {
    mapElement.style.display = "none";
  }

  render() {
    return ReactDOM.createPortal(this.props.children, mapElement);
  }
}

export { Map, mapElement };
