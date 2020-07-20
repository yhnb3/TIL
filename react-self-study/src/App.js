import React, { Component } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Hello React</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
