import React, { Component } from "react";

class Message extends Component {
  constructor() {
    //ตัวสืบทอดจาก class main
    super() 
      this.state = {
        message :"hello thiraphat"
      }
  }
 ChangeMsg(){
    this.setState({
        message:"chorakhe"
    })
  }
    render() {

    return (
      <div>
        {this.state.message}
        <button onClick={()=> this.ChangeMsg()}>Click TO my boat</button>
      </div>
    );
  }
}

export default Message;
