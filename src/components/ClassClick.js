import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("click");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}></button>
      </div>
    );
  }
}

export default ClassClick;
