import { UsedItemDetailBottom } from "../../atomic/atoms/usedItemDetailBottom";
import { UsedItemDetailTop } from "../../atomic/atoms/usedItemDetailTop";
import * as S from "./index.styled";

export const UsedItemDetailUI = () => {
  return (
    <S.Container>
      <UsedItemDetailTop />
      <UsedItemDetailBottom />
    </S.Container>
  );
};
