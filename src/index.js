import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PersonalButton from "./PersonalButton";
import PersonalText from "./PersonalText";
import PersonalDropdwn from "./PersonalDropdwn";
import Login from "./Login";

function App() {
  return (
    // <div className="App">
    //   <div style={{ margin: "10px" }}>
    //     <PersonalButton />
    //   </div>
    //   <div>
    //     <PersonalText />
    //   </div>
    //   <div>
    //     <PersonalDropdwn />
    //   </div>
    // </div>
    <div>
      <div>
        <Login />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
