import React, { Component,Fragment } from "react";
import Title from "./components/title/title";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import TitleRoute from "./routes/titleRoute";
import FooterRoute from "./routes/footerRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">My Locations</header>
        <TitleRoute></TitleRoute>
        <FooterRoute></FooterRoute>
        {/*<Router>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Title>My Locations allows the user to maintain a list of categorized name locations</Title>
                <Footer></Footer>
              </Fragment>
            )}
          />
        </Router>*/}
        {/*<Body>Some Body</Body>*/}
       
      </div>
    );
  }
}

export default App;
