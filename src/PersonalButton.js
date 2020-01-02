import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class PersonalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.onClick}
        >
          {this.props.PersonalBtnValue}
        </Button>
      </div>
    );
  }
}
export default PersonalButton;
