import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";

const TOGGLE_USED_ITEM_PICK = gql`
  mutation ($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export default function useMutationToggleUseditemPick() {
  const mutation = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  return mutation;
}
