import React, { Component } from "react";
import NormalText from "./NormalText";

var Menus = ["UserName", "Age", "Qualification", "Mobile", "Email"];
class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Total: [
        {
          UserName: "1",
          Age: "2",
          Qualification: "3",
          Mobile: "4",
          Email: "5"
        }
      ]
    };
  }
  setValue = (e, key, index) => {
    var Tot = this.state.Total;
    Tot[index][key] = e.target.value;
    console.log(Tot);
    this.setState({
      Total: Tot
    });
  };
  render() {
    return this.state.Total.map((item, index) => {
      return Object.keys(item).map((key, ind) => {
        return (
          <div style={{ float: "left", padding: "2%" }}>
            <NormalText
              NormalLabel={key}
              value={item[key]}
              onChange={e => {
                this.setValue(e, key, index);
              }}
            />
          </div>
        );
      });
    });
  }
}
export default UserDetails;
