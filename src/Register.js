import React, {Component} from 'react';
import NormalText from "./NormalText";
import NormalButton from "./NormalButton"

class Register extends Component{
constructor(props){
super(props);
this.state={}
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
  changemail = e => {
    this.setState({
      mail: e.target.value
    });
  };

  changemob(e) {
    this.setState({
    mob: e.target.value
    });


render(){
return(
  <div>
    <NormalText
      NormalLabel={"Username"}
      value={this.state.user}
      onChange={e => this.changeUser(e)}
    />
    <NormalText
      NormalLabel={"Age"}
      value={this.state.age}
      onChange={e=> this.changeage(e)}
      />
    </div>
    <div>
<NormalText
      NormalLabel={"Email"}
      value={this.state.mail}
      onChange={e => this.changemail(e)}
    />
    <NormalText
      NormalLabel={"Mobile"}
      value={this.state.mob}
      onChange={e=> this.changemob(e)}
      />

    </div>
    <NormalButton NormalBtnValue={"Register"}
)
}
}
export default Register