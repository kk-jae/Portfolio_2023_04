import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  padding-left: 0.5vw;
  cursor: pointer;
`;

export const Cancel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 40px;
  padding: 20px 20px;
  color: #4ea1d3;
  font-weight: 700;
`;
export const UserImp = styled.div`
  text-align: center;
  display: Flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`;

export const Login = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 5px;
  background-color: #d8e9ef;
  cursor: pointer;
`;

export const ResetPassword = styled.div`
  cursor: pointer;
  font-size: 13px;
  color: #bfbfbf;
`;

export const SighUp = styled.div`
  text-decoration: underline;
`;
