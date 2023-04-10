import styled from "@emotion/styled";

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
  z-index: 9999;
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
  width: 200px;
`;

export const Right_Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;

export const SendMessage = styled.div``;
