import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const ItemDetail = styled.div`
  position: relative;
  width: 18%;
  height: 300px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.02);
  }

  ::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${mediaQueries("tablet")} {
    width: 30%;
    height: 150px;
  }

  ${mediaQueries("phone")} {
    width: 30%;
    height: 100px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemImp = styled.div`
  position: absolute;
  color: white;
  font-weight: 500;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;

  ${mediaQueries("phone")} {
    padding: 5px;
    height: 30%;
  }
  ${mediaQueries("tablet")} {
    padding: 5px;
    height: 25%;
  }
`;

export const ItemName = styled.div`
  font-size: 13px;

  ${mediaQueries("phone")} {
    font-size: 10px;
  }
`;
export const ItemPick = styled.div`
  color: red;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
