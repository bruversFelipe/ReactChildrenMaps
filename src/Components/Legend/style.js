import styled, { css } from "styled-components";

const LegendWrapper = styled.div`
  display: flex;

  .legend-item + .legend-item {
    margin-left: 10px;
  }
`;

const LegendWrapperItem = styled.div`
  ${props => {
    const { color, circle } = props;

    return css`
      display: flex;
      align-items: center;

      .legend {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        background: ${color};
        border-radius: ${circle ? "50%" : 0};
      }
    `;
  }}
`;

export { LegendWrapperItem };
export default LegendWrapper;
