import React, { Fragment } from "react";
import Card from "antd/lib/card";
import CallLegends from "./CallLegends";
import CallExpandCard from "./CallExpandCard";

const Home = () => (
  <Fragment>
    <h1>Components</h1>
    <Card title="Legends" bordered={false}>
      <CallLegends />
    </Card>
    <br />
    <CallExpandCard />
  </Fragment>
);

export default Home;
