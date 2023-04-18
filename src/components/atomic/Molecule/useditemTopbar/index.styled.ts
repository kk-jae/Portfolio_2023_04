import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const Container = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5vw 0px 5vw;
  color: #454552;
  z-index: 10;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.div`
  padding-right: 1vw;
  color: #4ea1d3;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 5px;

  ${mediaQueries("tablet")} {
    display: none;
  }
  ${mediaQueries("phone")} {
    display: none;
  }
`;
export const HamBurger = styled.div`
  display: none;

  ${mediaQueries("tablet")} {
    display: flex;
    padding-top: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    color: #4ea1d3;
  }
  ${mediaQueries("phone")} {
    display: flex;
    padding-top: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    color: #4ea1d3;
  }
`;

interface IProps {
  showModalUser?: boolean;
}

export const MobileTopBar = styled.div<IProps>`
  display: ${(props) => (props.showModalUser ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 50vw;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  padding-left: 10px;
  color: white;
`;

export const MenuOut = styled.div`
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right_Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-right: 20px;
  cursor: pointer;
`;

export const Right_Item_My = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;
`;
export const My_Imp = styled.span``;
export const My_Point = styled.span``;

export const SendMessage = styled.div``;
