import { mediaQueries } from "./../../../../../commons/libraries/MediaQueries";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 30px;
  width: 90%;
  background-color: white;
  padding: 30px;
`;
export const Seller = styled.div`
  width: 100%;
`;
export const Seller_Top = styled.div`
  padding-bottom: 20px;
  position: relative;
`;
export const Seller_Top_Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
export const Seller_Middle = styled.div`
  font-size: 13px;
  color: #bfbfbf;
  padding: 10px;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 13px;
`;
export const Seller_Middle_Item = styled.span`
  padding-right: 10px;
`;

export const Seller_Bottom = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;

export const SellerBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Seller_Bottom_Item = styled.div`
  padding: 10px 0px 10px 20px;
  display: flex;

  ${mediaQueries("phone")} {
    flex-direction: column;
  }
`;

export const Seller_Bottom_Item_Title = styled.div`
  width: 10vw;
  font-weight: 700;

  ${mediaQueries("phone")} {
    width: 100%;
    padding-bottom: 8px;
  }
`;
export const Seller_Bottom_Item_Sub = styled.div``;
export const Seller_Bottom_Item_Sub_Map = styled.div`
  width: 400px;
  height: 300px;

  ${mediaQueries("phone")} {
    width: 100%;
    height: 200px;
    padding-right: 8px;
  }
`;

export const Item = styled.div``;
