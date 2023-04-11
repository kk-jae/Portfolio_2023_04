import { UsedItemNew } from "../../atomic/atoms/usedItemNew";
import * as S from "./index.styled";

export interface IEditProps {
  isEdit: boolean;
}

export const CreateUsedItem = (props: IEditProps) => {
  return (
    <S.Container>
      <UsedItemNew isEdit={props.isEdit} />
    </S.Container>
  );
};
