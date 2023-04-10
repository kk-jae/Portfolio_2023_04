import { UsedItemDetailBottom } from "../../atomic/atoms/usedItemDetail/usedItemDetailBottom";
import { UsedItemDetailTop } from "../../atomic/atoms/usedItemDetail/usedItemDetailTop";
import * as S from "./index.styled";

export const UsedItemDetailUI = () => {
  return (
    <S.Container>
      <UsedItemDetailTop />
      <UsedItemDetailBottom />
    </S.Container>
  );
};
