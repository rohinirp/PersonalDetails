import React, { Component } from "react";
import { render } from "react-dom";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import NormalButton from "./NormalButton";

import "./styles.css";
import Address from "./Address";

class Home extends Component {
  Totaluser = [];
  constructor(props) {
    super(props);
    this.state = {};
  }
  submit = () => {
    alert("Submit");
    console.log(this.Totaluser);
  };
  render() {
    return (
      <div>
        <div>
          {/* <Register/> */}
          <UserDetails Users={this.Totaluser} />
        </div>
        <div>
          <PersonalDetails />
        </div>
        <div>
          <Address />
        </div>
        <div>
          <NormalButton Btnname="Submit" onClick={this.submit} />
        </div>
      </div>
    );
  }
}
export default Home;
