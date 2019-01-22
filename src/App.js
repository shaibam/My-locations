import React, { Component, Fragment } from "react";
import Title from "./components/title/title";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import TitleRoute from "./routes/titleRoute";
import FooterRoute from "./routes/footerRoute";
import BodyRoute from "./routes/bodyRoute";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { 
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">My Locations App</header>
        <Router>
          <Fragment>
            <TitleRoute />
            <BodyRoute/>
            <FooterRoute />
          </Fragment>
        </Router>       
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
