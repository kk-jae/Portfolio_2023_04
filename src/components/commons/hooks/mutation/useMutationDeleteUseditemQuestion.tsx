import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export default function useMutationDeleteUseditemQuestion() {
  const mutation = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  return mutation;
}
