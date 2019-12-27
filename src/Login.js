import React, { Component } from "react";
import PersonalText from "./PersonalText";
import PersonalDropdwn from "./PersonalDropdwn";
import PersonalButton from "./PersonalButton";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <PersonalText PersonalLabel={"User Name"} />
        <PersonalText PersonalLabel={"Password"} />
        <PersonalDropdwn />
        <PersonalButton PersonalBtnValue={"Sign Up"} />
        <PersonalButton PersonalBtnValue={"Sign In"} />
      </div>
    );
  }
}
export default Login;
