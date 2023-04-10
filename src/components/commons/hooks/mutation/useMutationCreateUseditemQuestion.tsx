import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      useditem {
        _id
        # 댓글의 id
      }
    }
  }
`;

export const useMutationCreateUseditemQuestion = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  return mutation;
};
