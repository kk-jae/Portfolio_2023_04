import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Input = styled.input`
  width: ${(props) => (props.width ? `${props.width}px` : "15vw")};
  height: ${(props) => (props.height ? `${props.height}px` : "25px")};
  padding: 8px;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  outline: none;

  ::placeholder {
    color: #bfbfbf;
  }

  ${mediaQueries("phone")} {
    width: 70vw;
    height: 40px;
    font-size: 12px;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  padding: 3px 0px 0px 8px;
`;
