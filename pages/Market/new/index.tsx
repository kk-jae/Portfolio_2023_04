import { UsedItemTopBar } from "../../../src/components/atomic/Molecule/useditemTopbar";
import { useAuth } from "../../../src/components/commons/hooks/useAuth/UseAuth";
import { CreateUsedItem } from "../../../src/components/units/newUsedItem";

export default function NewUsedItemUI() {
  useAuth();
  return (
    <>
      <UsedItemTopBar />
      <CreateUsedItem isEdit={false} />
    </>
  );
}
