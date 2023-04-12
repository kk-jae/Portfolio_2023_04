import { UsedItemTopBar } from "../../../../../src/components/atomic/Molecule/useditemTopbar";
import { CreateUsedItem } from "../../../../../src/components/units/newUsedItem";

export default function UpdateUsedItemUI() {
  return (
    <>
      <UsedItemTopBar />
      <CreateUsedItem isEdit={true} />
    </>
  );
}
