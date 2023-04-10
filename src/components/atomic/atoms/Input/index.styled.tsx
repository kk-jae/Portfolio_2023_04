import styled from "@emotion/styled";

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "15vw")};
  height: ${(props) => (props.height ? `${props.height}px` : "25px")};
  padding: 8px;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  outline: none;

  ::placeholder {
    color: #bfbfbf;
  }
`;
