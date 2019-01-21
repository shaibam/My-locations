import React, { Component, Fragment } from "react";
import Footer from "../components/footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class FooterRoute extends Component {
  render() {
    return <Route component={Footer} />;
  }
}

export default FooterRoute;
