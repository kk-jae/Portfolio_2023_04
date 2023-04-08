import styled from "@emotion/styled";

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "15vw")};
  height: ${(props) => (props.width ? props.width : "25px")};
  padding: 8px;
  border-radius: 5px;
  border: none;
`;
