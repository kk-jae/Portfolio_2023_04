import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #f4f4f4;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const AnswerContainer = styled.div`
  display: flex;
  position: relative;
  margin: 10px 0px 10px 0px;
`;
export const Icon = styled.div`
  transform: rotateY(180deg);
  color: #e85a71;
  margin-left: 30px;
`;

export const Left = styled.div`
  padding: 5px 0px 0px 10px;
`;
export const Name = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
export const Contents = styled.div`
  font-size: 14px;
`;
export const Delete = styled.button`
  margin-top: 8px;
  padding: 0px 5px 0px 5px;
  font-size: 13px;
  background-color: white;
  border: 1px solid #bfbfbf;
  cursor: pointer;
`;

export const Right = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 11px;
  color: #bfbfbf; ;
`;
