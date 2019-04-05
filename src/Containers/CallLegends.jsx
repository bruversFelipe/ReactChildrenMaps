import React from "react";
import Legend from "../Components/Legend";

const CallLegends = () => (
  <Legend>
    <Legend.Item color="#0a4f00">Aproved</Legend.Item>
    <Legend.Item color="#ff0000">Not Aproved</Legend.Item>
    <Legend.Item color="#faf060" circle>
      Waiting
    </Legend.Item>
    <Legend.Item color="#00fff0" circle>
      Legend Circle
    </Legend.Item>
    <Legend.Item color="#faaaa0" circle />
    <Legend.Item color="#ddd" circle />
  </Legend>
);

export default CallLegends;
