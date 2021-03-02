import React, { Component } from "react";
import { render } from "react-dom";
import Logger from "./Logger";
import TestComponent from "./TestComponent";

const App = () => {
  React.useEffect(() => {
    console.log("App Started!");
  }, []);

  return (
    <div
      style={{
        height: "98vh",
        display: "grid",
        gridTemplateRows: "3fr 1fr"
      }}
    >
      <TestComponent />
      <Logger reversed />
    </div>
  );
};

render(<App />, document.getElementById("root"));
