import styled from "@emotion/styled";

// color
// #e85a71
// #d8e9ef 탑바배경
// #4ea1d3
// #454552

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 8vh;
  background-color: #d8e9ef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5vw 0px 5vw;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.div`
  padding-right: 1vw;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Right_Item = styled.div`
  padding: 0px 1vw 0px 1vw;
`;
