import { SellerItem } from "../Item";
import * as S from "./index.styled";

export const SellerImp = () => {
  return (
    <S.Container>
      <S.Seller>
        <S.Seller_Top>
          <S.Seller_Top_Title>제목</S.Seller_Top_Title>
        </S.Seller_Top>
        <S.Seller_Middle>
          <S.Seller_Middle_Item>조회 1,170</S.Seller_Middle_Item>
          <S.Seller_Middle_Item>댓글 2</S.Seller_Middle_Item>
          <S.Seller_Middle_Item>추천 0</S.Seller_Middle_Item>
          <S.Seller_Middle_Item>작성일 2023-04-07</S.Seller_Middle_Item>
          <S.Seller_Middle_Item>작성자 초콜릿</S.Seller_Middle_Item>
        </S.Seller_Middle>
        <S.Seller_Bottom>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>카테고리</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub>일렉기타</S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>판매가격</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub>500,000 원</S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>주소</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub>
              서울시 구로구 개봉동 270-5
            </S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
        </S.Seller_Bottom>
      </S.Seller>
      <SellerItem />
    </S.Container>
  );
};
