import React, { Component } from "react";

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {};
    this.ref = {};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div
        ref={ref => {
          this.ref = ref;
        }}
      >
        <h1>Hello, world!</h1>
        <code>It is {this.state.now}</code>
      </div>
    );
  }
}

export default HelloWorld;
