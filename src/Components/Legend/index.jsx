import React from "react";
import PropTypes from "prop-types";
import LegendWrapper, { LegendWrapperItem } from "./style";

const Legend = ({ children }) => (
  <LegendWrapper>
    {React.Children.map(children, child => (
      <React.Fragment key={child}>{child}</React.Fragment>
    ))}
  </LegendWrapper>
);

const LegendItem = ({ children, color, circle }) => (
  <LegendWrapperItem className="legend-item" circle={circle} color={color}>
    <div className="legend" />
    {children}
  </LegendWrapperItem>
);

Legend.Item = LegendItem;

Legend.propTypes = {
  children: PropTypes.node.isRequired
};

LegendItem.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  circle: PropTypes.bool
};

LegendItem.defaultProps = {
  children: null,
  circle: false
};

export default Legend;
