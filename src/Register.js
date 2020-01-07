import React, { Component } from "react";
import NormalText from "./NormalText";
import NormalButton from "./NormalButton";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeUser = e => {
    this.setState({
      user: e.target.value
    });
  };

  changeage = e => {
    this.setState({
      age: e.target.value
    });
  };
  changequal = e => {
    this.setState({
      qual: e.target.value
    });
  };
  changemail = e => {
    this.setState({
      mail: e.target.value
    });
  };

  changemob = e => {
    this.setState({
      mob: e.target.value
    });
  };
  changefathname = e => {
    this.setState({
      fathname: e.target.value
    });
  };
  changemothname = e => {
    this.setState({
      mothname: e.target.value
    });
  };
  changeocc = e => {
    this.setState({
      occ: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div style={{ color: "green" }}>Personal Details</div>
        <NormalText
          NormalLabel={"Username"}
          value={this.state.user}
          onChange={e => this.changeUser(e)}
        />
        <NormalText
          NormalLabel={"Age"}
          value={this.state.age}
          onChange={e => this.changeage(e)}
        />
        <NormalText
          NormalLabel={"Qualification"}
          value={this.state.mob}
          onChange={e => this.changequal(e)}
        />
        <NormalText
          NormalLabel={"Email"}
          value={this.state.mail}
          onChange={e => this.changemail(e)}
        />
        <NormalText
          NormalLabel={"Mobile"}
          value={this.state.mob}
          onChange={e => this.changemob(e)}
        />
      
        <div>
        <NormalText
          NormalLabel={"Father's Name"}
          value={this.state.mob}
          onChange={e => this.changefathname(e)}
        />
        <NormalText
          NormalLabel={"Mother's Name"}
          value={this.state.mob}
          onChange={e => this.changemothname(e)}
        />
        <NormalText
          NormalLabel={"Occupation"}
          value={this.state.mob}
          onChange={e => this.changeocc(e)}
        />
        </div>

        <NormalButton NormalBtnValue={"Register"} />
      
    );
  }
}
export default Register;
