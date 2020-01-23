import React, { Component } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import FirstButton from "./FirstButton";
import TextField from "@material-ui/core/TextField";
class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      TotalMsg: []
    };
  }

  send = () => {
    let data = [...this.state.TotalMsg]
    data.push(this.state.msg)
    this.setState({
      TotalMsg : data
    })
  };
  change(e) {
    this.setState({
      msg: e.target.value
    });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.TotalMsg.map((item, index) => {
            return <SnackbarContent message={item} />;
          })}
        </div>

        <div>
          <TextField
            id="standard-basic"
            label="Standard"
            onChange={e => {
              this.change(e);
            }}
          />
        </div>
        <div>
          <FirstButton name="send" onClick={this.send} />
        </div>
      </div>
    );
  }
}
export default TextBox;
