import React, { Component } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import "./App.css";
import Login from "./component/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "main",
    };
  }
  getPage() {
    var _article = null;
    if (this.state.mode === "main") {
      _article = <h1>Hello React</h1>;
    } else if (this.state.mode === "Login") {
      _article = <Login />;
    }
    return _article;
  }
  render() {
    return (
      <React.Fragment>
        <Header
          onChangePage={(cmode) =>
            this.setState({
              mode: cmode,
            })
          }
        />
        {this.getPage()}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
