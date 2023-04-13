import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const Container = styled.div`
  margin: 30px;
  width: 90%;
  background-color: white;
  padding: 30px;
`;

export const Item_address = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Item_Map_Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${mediaQueries("tablet")} {
    flex-direction: column;
  }
  ${mediaQueries("phone")} {
    flex-direction: column;
  }
`;

export const Item_Title = styled.div`
  width: 10vw;
  font-weight: 700;
  padding-bottom: 20px;

  ${mediaQueries("phone")} {
    width: 100%;
  }
`;

export const Address_Text = styled.div`
  height: 200px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const AddressBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100px;
  height: 45px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #4ea1d3;
  cursor: pointer;

  ${mediaQueries("phone")} {
    text-align: center;
    position: absolute;
    right: 5vw;
    width: 65px;
  }
`;

export const Map = styled.div`
  width: 400px;
  height: 300px;

  ${mediaQueries("phone")} {
    width: 70vw;
    height: 200px;
  }
`;

export const Zipcode = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
