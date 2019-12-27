import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class PersonalDropdwn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 10
    };
  }
  selectValue(e) {
    this.setState({
      data: e.target.value
    });
  }
  render() {
    console.log("1");
    return (
      <div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.data}
          onChange={e => {
            this.selectValue(e);
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </div>
    );
  }
}
export default PersonalDropdwn;
