import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class NormalText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("MyProps");
    console.log(this.props);
    return (
      <div>
        <TextField id="standard-basic" 
        label={this.props.NormalLabel}
        value= {this.props.value}
        onChange={this.props.onChange}
         />
      </div>
    );
  }

}
export default NormalText;
