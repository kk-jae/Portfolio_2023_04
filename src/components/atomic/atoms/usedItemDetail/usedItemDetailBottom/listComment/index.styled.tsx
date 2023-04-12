import styled from "@emotion/styled";

export const Container = styled.div`
  width: 90%;
  background-color: white;
  padding: 30px 30px 0px 30px;
`;

export const Top = styled.div`
  padding-bottom: 13px;
  font-weight: 700;
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  border-bottom: 2px solid #f4f4f4;
  padding-bottom: 20px;
  position: relative;
`;

export const Left = styled.img`
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const Center_Name = styled.div`
  font-weight: 700;
  font-size: 14px;
`;
export const Center_Contents = styled.div`
  font-size: 14px;
`;
export const Center_Answer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Center_Answer_Item = styled.button`
  margin: 8px 5px 0px 0px;
  padding: 3px;
  font-size: 11px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #bfbfbf;
  background-color: white;
`;

export const Right = styled.div`
  width: 20%;
  text-align: end;
  position: absolute;
  top: 0;
  right: 0;
  color: #bfbfbf;
  font-size: 11px;
`;
