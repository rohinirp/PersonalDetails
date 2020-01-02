import React, { Component } from "react";
import PersonalText from "./PersonalText";
import PersonalDropdwn from "./PersonalDropdwn";
import PersonalButton from "./PersonalButton";
var menuItem = [100 , 200 , 300]
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "" ,
      Drpvalue : ''
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
    alert("sign up");
  };
  signIn = () => {
    if (this.state.user === this.state.pass) {
      alert("success");
    } else {
      alert("Failed");
    }
  };
  changeDrpval(e){
    this.setState({
      Drpvalue : e.target.value
    })
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
        <PersonalDropdwn value={this.state.Drpvalue} onChange={(e)=>this.changeDrpval(e)} menuData={menuItem}/>
        <PersonalButton PersonalBtnValue={"Sign Up"} onClick={this.signUp} />
        <PersonalButton PersonalBtnValue={"Sign In"} onClick={this.signIn} />
      </div>
    );
  }
}
export default Login;
