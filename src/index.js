import React from "react";
import ReactDOM from "react-dom";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";

import "./styles.css";
import Address from "./Address";

function App() {
  return (
    <div>
      <div>
        {/* <Register/> */}
        <UserDetails />
      </div>
      <div>
        <PersonalDetails />
      </div>
      <div>
        <Address />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
