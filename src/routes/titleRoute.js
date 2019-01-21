import React, { Component, Fragment } from "react";
import Title from "../components/title/title";
import { BrowserRouter as Router, Route } from "react-router-dom";
class TitleRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
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
            render={() => <Title>Categories manager</Title>}
          />
          <Route
            exact
            path="/Locations"
            render={() => <Title>Locations manager</Title>}
          />
        </Router>
      </Fragment>
    );
  }
}

export default TitleRoute;
