import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
