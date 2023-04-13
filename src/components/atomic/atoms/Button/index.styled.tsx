import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

interface IButton {
  width?: number;
  height?: number;
}

export const Button = styled.button<IButton>`
  width: ${(props) => (props.width ? `${props.width}px` : "100px")};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #4ea1d3;
  cursor: pointer;
  font-weight: 500;
  margin: 0px 3px 0px 3px;

  ${mediaQueries("phone")} {
    width: ${(props) => (props.width ? `${props.width}px` : "65px")};
  }
`;
