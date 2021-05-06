import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 56,
    };
  }
  render() {
      let msg;
    //   == check value but  === check type and value
    // ternary operators
        this.state.login == '56' ? msg = <div>GOOD LOGIN</div> : msg = <div>BAD MI DAI DAAK</div>;
        return msg;
  }
}

export default User;
