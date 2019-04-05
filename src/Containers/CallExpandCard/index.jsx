import React from "react";
import Card from "../../Components/Card";

const Small = React.lazy(() => import("./Small"));
const Large = React.lazy(() => import("./Large"));

const CallExpandCard = () => (
  <React.Suspense fallback={<span>Loading...</span>}>
    <Card
      title="Composition => Expand - click on the magnifying glass"
      bordered={false}
      expanded
    >
      {({ expand }) =>
        expand ? (
          <div style={{ width: "70%", margin: "10px auto 0" }}>
            <Large />
          </div>
        ) : (
          <Small />
        )
      }
    </Card>
  </React.Suspense>
);

export default CallExpandCard;
