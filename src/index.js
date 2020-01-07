import React from "react";
import ReactDOM from "react-dom";
import Register from './Register'
import UserDetails from './UserDetails'

import "./styles.css";

function App() {
  return (
    <div>
      <div>
        {/* <Register/> */}
        <UserDetails/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
