import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #454552;
`;

export const Modal_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cancel_wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Close = styled.div`
  cursor: pointer;
  font-size: 20px;
`;

export const Top = styled.div`
  margin-top: 43px;
  font-size: 20px;
`;
export const Middle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Middle_top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 14px 8px 14px 8px;
  margin: 40px 0px 0px 0px;
  width: 384px;
  border-bottom: 1px solid #454552;
  color: #454552;
  cursor: pointer;
`;
export const Middle_top_left = styled.div`
  color: #454552;
`;
export const Middle_top_right = styled.div`
  font-size: 18px;
`;

export const Middle_bottom = styled.div`
  width: 384px;
  height: 212px;
  border-radius: 10px;
  margin-top: 17px;
`;
export const Middle_price_item = styled.div`
  width: 100%;
  height: 25%;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

export const Middle_off = styled.div``;

export const Bottom = styled.div`
  width: 384px;
  height: 51px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: #4ea1d3;
  margin: 30px 0px 30px 0px;
`;
