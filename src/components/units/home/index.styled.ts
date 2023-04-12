import styled from "@emotion/styled";
import { mediaQueries } from "../../commons/libraries/MediaQueries";

export const Container = styled.div`
  background-color: #d8e9ef;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  padding-top: 8vh;
  color: #454552;

  ${mediaQueries("phone")} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 30vw;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${mediaQueries("phone")} {
    width: 100vw;
  }
`;

export const Left_Text = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;

  ${mediaQueries("phone")} {
    align-items: center;
  }
`;

export const Left_Text_Main = styled.div`
  font-size: 50px;

  ${mediaQueries("phone")} {
    font-size: 30px;
  }
`;
export const Left_Text_Sub = styled.div`
  font-size: 50px;

  ${mediaQueries("phone")} {
    font-size: 30px;
  }
`;

export const Left_Text_Bottom = styled.span`
  margin-bottom: 20px;

  ${mediaQueries("phone")} {
    font-size: 13px;
  }
`;
export const Market = styled.span`
  font-size: 70px;
  font-weight: 600;
  color: #4ea1d3;
`;

export const Left_StartBtn = styled.button`
  margin-top: 20px;
  width: 170px;
  height: 40px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #4ea1d3;
  cursor: pointer;
`;

export const Right = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${mediaQueries("phone")} {
    width: 70vw;
  }
`;
export const Right_img = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 5px;
  object-fit: cover;
`;
