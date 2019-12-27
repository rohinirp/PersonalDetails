import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class PersonalText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("My props");
    console.log(this.props);
    return (
      <div>
        <TextField
          id="outlined-basic"
          label={this.props.PersonalLabel}
          variant="outlined"
        />
      </div>
    );
  }
}
export default PersonalText;
