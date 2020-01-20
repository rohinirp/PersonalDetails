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

    this.props.Totaluser = Tot;
  };
  render() {
    return this.state.Total.map((item, index) => {
      return (
        <div>
          <h1>User Details</h1>
          {Object.keys(item).map((key, ind) => {
            return (
              <div
                style={{
                  float: key !== "Email" ? "left" : "",
                  paddingRight: "15%"
                }}
              >
                <NormalText
                  NormalLabel={key}
                  value={item[key]}
                  onChange={e => {
                    this.setValue(e, key, index);
                  }}
                />
              </div>
            );
          })}
        </div>
      );
    });
  }
}
export default UserDetails;
