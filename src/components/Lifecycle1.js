import React, { Component } from "react";

class lifecycle1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "thiraphat5555",
      age: 19,
    };
    console.log("this state5555");
  }

  static getDerivedStateForProps(props, state) {
    console.log("Hello Boaty5555");
    return null;
  }

  componentDidMount() {
    console.log("HI BRO5555");
  }
  render() {
    console.log("render5555");
    return (
      <div>
        <div>LifeCycle1 Thiraphat5</div>

      </div>
    );
  }
}
export default lifecycle1;
