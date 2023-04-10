import styled from "@emotion/styled";

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
`;

export const Item_Title = styled.div`
  width: 10vw;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const Address_Text = styled.div`
  height: 200px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Map = styled.div`
  width: 400px;
  height: 300px;
`;

export const Zipcode = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
