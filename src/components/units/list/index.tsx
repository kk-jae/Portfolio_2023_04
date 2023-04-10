import * as S from "./index.styled";
import { ListItem } from "./list_item";

export const ListUI = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Wrapper_Top>
          <S.Top_Title>LIST 상품리스트</S.Top_Title>
        </S.Wrapper_Top>
        <S.Wrapper_Middle>
          <ListItem />
        </S.Wrapper_Middle>
      </S.Wrapper>
    </S.Container>
  );
};
