import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import * as S from "./index.styled";

export const NewBtn = () => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container onClick={onClickMoveToPage("/Market/new")}>
      상품 <br />
      등록
    </S.Container>
  );
};
