import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  ${mediaQueries("phone")} {
    display: flex;
    flex-direction: row;
  }
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
  padding: 20px 0px 0px 0px;
  color: #4ea1d3;
  font-weight: 700;
`;
export const UserImp = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
`;

export const Login = styled.button`
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

export const SighUpWrapper = styled.div`
  position: absolute;
  bottom: 20px;
`;
