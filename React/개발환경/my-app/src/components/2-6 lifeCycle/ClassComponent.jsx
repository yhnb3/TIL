import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("contructor");
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("did mount");
    this.timerId = setInterval(() => this.tick(), 100000);
  }

  componentWillUnmount() {
    console.log("will unmount");
    clearInterval(this.timerId);
  }

  componentDidUpdate() {
    console.log("did update");
  }
  handleClick = () => {
    alert(this.state.date);
  };

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world! It's class</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
