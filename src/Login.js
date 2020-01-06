import React, { Component } from "react";
import PersonalText from "./PersonalText";
import PersonalDropdwn from "./PersonalDropdwn";
import PersonalButton from "./PersonalButton";
var menuItem = ["Html", "Css", "Javascript", "Reactjs"];
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      Drpvalue: ""
    };
  }
  changeUser = e => {
    this.setState({
      user: e.target.value
    });
  };

  changePassword(e) {
    this.setState({
      pass: e.target.value
    });
  }
  signUp = () => {
    var user = this.state.user;
    var pass = this.state.pass;
    var Drpvalue = this.state.Drpvalue;
    if (user === "" || user.length <= 0) {
      alert("Please fill the user name");
      return;
    }
    if (pass === "" || pass.length <= 0) {
      alert("please fill the password");
      return;
    }
    if (Drpvalue === "" || Drpvalue.length <= 0) {
      alert("Please select the course");
      return;
    }

    var Tot = [];
    if (localStorage.getItem("Register")) {
      var data = JSON.parse(localStorage.getItem("Register"));
      Tot.push(data);
    }
    var data = {
      UserName: user,
      Password: pass,
      PersonalDropdwn: Drpvalue
    };
    Tot.push(data);
    console.log(data);
    var FinalData = JSON.stringify(Tot);

    localStorage.setItem("Register", FinalData);

    this.setState({
      user: "",
      pass: "",
      Drpvalue: ""
    });
  };
  signIn = () => {
    var data = localStorage.getItem("Register");
    var NewData = JSON.parse(data);
    console.log(data);
    console.log(NewData);
    if (this.state.user === this.state.pass) {
      alert("success");
    } else {
      alert("Failed");
    }
  };
  changeDrpval(e) {
    this.setState({
      Drpvalue: e.target.value
    });
  }
  render() {
    return (
      <div>
        <PersonalText
          PersonalLabel={"User Name"}
          value={this.state.user}
          onChange={e => this.changeUser(e)}
        />
        <PersonalText
          PersonalLabel={"Password"}
          value={this.state.pass}
          onChange={e => this.changePassword(e)}
        />
        <PersonalDropdwn
          value={this.state.Drpvalue}
          onChange={e => this.changeDrpval(e)}
          menuData={menuItem}
        />
        <PersonalButton PersonalBtnValue={"Sign Up"} onClick={this.signUp} />
        <PersonalButton PersonalBtnValue={"Sign In"} onClick={this.signIn} />
      </div>
    );
  }
}
export default Login;
