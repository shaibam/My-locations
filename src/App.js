import React, { Component, Fragment } from "react";
import Title from "./components/title/title";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import TitleRoute from "./routes/titleRoute";
import FooterRoute from "./routes/footerRoute";
import BodyRoute from "./routes/bodyRoute";
import { DbInit } from "./db/db";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
    let dbInit = new DbInit();
    dbInit.onReady(() => this.setState({ ready: true }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">My Locations App</header>
        {this.state.ready ? (
          <Router>
            <Fragment>
              <TitleRoute />
              <BodyRoute />
              <FooterRoute />
            </Fragment>
          </Router>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
