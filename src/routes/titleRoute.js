import React, { Component, Fragment } from "react";
import Title from "../components/title/title";
import { BrowserRouter as Router, Route } from "react-router-dom";
class TitleRoute extends Component {
  render() {
    return (

          <Fragment>
            <Route
              exact
              path="/"
              render={() => (
                <Title>
                  My Locations allows the user to maintain a list of categorized
                  name locations
                </Title>
              )}
            />
            <Route
              exact
              path="/Categories"
              render={() => <Title>Categories manager - Add, remove and edit categories (Editing will be auto-saved) </Title>}
            />
            <Route
              exact
              path="/Locations"
              render={() => <Title>Locations manager - Add, remove and edit locations (Editing will be auto-saved) <br /> click on the map to view a location details </Title>}
            />
          </Fragment>

    );
  }
}

export default TitleRoute;
