import { mediaQueries } from "./../../../commons/libraries/MediaQueries";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #d8e9ef;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #454552;
`;

export const Wrapper = styled.div`
  margin: 30px;
  width: 90%;
  background-color: white;
  padding: 30px;
`;

export const List_Wrapper = styled.div`
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  padding: 10px;
`;

export const List_Detail = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px 10px 0px;
  border-bottom: 2px solid #f5f5f5;
`;

export const Bought_Item = styled.div`
  margin: 10px 0px 10px 0px;
`;

export const Left = styled.div``;
export const Left_Img = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;

  ${mediaQueries("phone")} {
    width: 50px;
    height: 50px;
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 5px 5px 5px 30px;

  ${mediaQueries("phone")} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  display: flex;
  padding-bottom: 5px;
  font-weight: 700;

  ${mediaQueries("phone")} {
    flex-direction: column;
  }
`;

export const Title_item = styled.div`
  width: 100px;
  font-weight: 500;

  ${mediaQueries("phone")} {
    font-size: 0.7rem;
  }
`;

export const Detail = styled.div`
  ${mediaQueries("phone")} {
    font-size: 0.8rem;
  }
`;
