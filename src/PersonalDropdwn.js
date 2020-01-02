import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class PersonalDropdwn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {

    console.log("1");
    var data = this.props.menuData ? this.props.menuData : []
    return (
      <div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {
            data.map((item)=>{
              return <MenuItem value={item}>{item}</MenuItem>
            })
          }
          
        
        </Select>
      </div>
    );
  }
}
export default PersonalDropdwn;
