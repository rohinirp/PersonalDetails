import React, { Component } from "react";
import NormalText from "./NormalText";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Total: [
        {
          Street: "11",
          City: "12",
          District: "13"
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
      return (
        <div>
          {" "}
          <h1>Contact Details</h1>
          {Object.keys(item).map((key, ind) => {
            return (
              <div>
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
export default Address;
