import { Input } from "../../atoms/Input";
import * as S from "./index.styled";

export const UsedItemTopBar = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Logo>Market</S.Logo>
      </S.Left>
      <S.Right>
        <Input placeholder="원하는 상품을 검색하세요" />
        <S.Right_Item>로그인</S.Right_Item>
        <S.Right_Item>오늘 본 상품</S.Right_Item>
        <S.Right_Item>채팅하기</S.Right_Item>
      </S.Right>
    </S.Container>
  );
};
