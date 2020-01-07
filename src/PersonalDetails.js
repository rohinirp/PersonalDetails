import React, { Component } from "react";
import NormalText from "./NormalText";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Total: [
        {
          FathersName: "6",
          MothersName: "7",
          Occupation: "8"
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
          <div style={{ float: "left", paddingLeft: "30px" }}>
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
export default PersonalDetails;
