import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #d8e9ef;
  width: 100vw;
  padding-top: 8vh;
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

export const Profile_Wrapper = styled.div`
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  padding: 10px;
`;

export const Profile_left = styled.div`
  padding-top: 15px;
`;
export const Profile_left_img = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
`;
export const Profile_right = styled.div`
  margin: 15px 15px 15px 25px;
`;
export const Profile_right_text = styled.div`
  font-weight: 700;
  display: flex;
  line-height: 30px;
`;
export const Right_select = styled.span`
  width: 70px;
  font-weight: 500;
`;

export const Baskets = styled.div`
  width: 100%;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  border-bottom: 1px solid #bfbfbf;
`;

export const Baskets_left = styled.div`
  font-weight: 700;
`;

export const Baskets_right = styled.div`
  width: 90%;
`;

export const Baskets_item = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
`;

export const Baskets_image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
export const Baskets_seller_price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 10px;
  font-size: 14px;
  font-weight: 700;
`;
export const Baskets_seller = styled.div``;
export const Baskets_price = styled.div``;
