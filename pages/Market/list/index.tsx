import { UsedItemTopBar } from "../../../src/components/atomic/Molecule/useditemTopbar";
import { ListUI } from "../../../src/components/units/list";
import { NewBtn } from "../../../src/components/units/newBtn";

export default function List() {
  return (
    <>
      <UsedItemTopBar />
      <NewBtn />
      <ListUI />
    </>
  );
}
