import styled, { css } from "styled-components";
import Card from "antd/lib/card";

const AntCardWrapper = styled(Card)`
  ${props => {
    const { expand } = props;

    console.log("expand", expand);

    if (expand) {
      return css`
        position: fixed;
        z-index: 99;
        left: 24px;
        right: 24px;
        bottom: 24px;
        top: 24px;
      `;
    }
    return css``;
  }}
`;

export default AntCardWrapper;
