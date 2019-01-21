import React, { Component, Fragment } from "react";
import Body from "../components/body/body";
import Categories from "../components/categories/categories";
import Locations from "../components/locations/locations";
import Instructions from "../components/instructions/instructions";

import { BrowserRouter as Router, Route } from "react-router-dom";
class BodyRoute extends Component {
  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/Categories"
          render={() => (
            <Body>
              <Categories />
            </Body>
          )}
        />
        <Route
          exact
          path="/Locations"
          render={() => (
            <Body>
              <Locations />
            </Body>
          )}
        />
        <Route
          exact
          path="/"
          component={() => (
            <Body>
              <Instructions />
            </Body>
          )}
        />
      </Fragment>
    );
  }
}

export default BodyRoute;
