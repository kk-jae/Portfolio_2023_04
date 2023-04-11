import { IEditProps } from "../../../units/newUsedItem";
import { CreateImp } from "./Seller";

export const UsedItemNew = (props: IEditProps) => {
  return <CreateImp isEdit={props.isEdit} />;
};
