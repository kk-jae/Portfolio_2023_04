import styled from "@emotion/styled";

interface IButton {
  width?: number;
  height?: number;
}

export const Button = styled.button<IButton>`
  margin-top: 20px;
  width: ${(props) => (props.width ? `${props.width}px` : "100px")};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #4ea1d3;
  cursor: pointer;
`;
