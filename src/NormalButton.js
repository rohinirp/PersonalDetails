import React, {Component} from "react";
import Button from '@material-ui/core/Button';

class NormalButton extends Component{
constructor(props){
super(props);
this.state={}
}
render(){
return(
  <div>
  <Button variant="contained" color="primary" onClick={this.props.onClick}>
  {this.props.Btnname}
  </Button>
  </div>
)
}
}
export default NormalButton