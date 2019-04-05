import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Home from "./Containers/Home";

const content = {
  padding: "24px"
};

ReactDOM.render(
  <div style={content}>
    <Home />
  </div>,
  document.getElementById("root")
);
