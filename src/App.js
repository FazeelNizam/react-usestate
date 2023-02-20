import React from "react";
import Arrays from "./Arrays";
import Setup from "./changeTitle";
import Counter from "./Counter";
import Objects from "./Objects";

function App() {
  return (
    <>
      <div className="container">
        <Setup />
      </div>
      <div className="container">
        <Arrays />
      </div>
      <div className="container">
        <Objects />
      </div>
      <div className="container">
        <Counter />
      </div>
    </>
  );
}

export default App;
