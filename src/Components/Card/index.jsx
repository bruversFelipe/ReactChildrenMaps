import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "antd/lib/icon";
import AntCardWrapper from "./style";

const Card = ({ expanded, children, ...props }) => {
  const [expand, setExpand] = useState(false);

  const openCloseCard = () => {
    setExpand(!expand);
  };

  return (
    <AntCardWrapper
      {...props}
      expand={expand}
      extra={
        expanded ? (
          <React.Fragment>
            {!expand ? (
              <Icon type="zoom-in" onClick={openCloseCard} />
            ) : (
              <Icon type="zoom-out" onClick={openCloseCard} />
            )}
          </React.Fragment>
        ) : null
      }
    >
      {children({ expand })}
    </AntCardWrapper>
  );
};

Card.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.func.isRequired
};

Card.defaultProps = {
  expanded: false
};

export default Card;
