import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      user {
        name
      }
    }
  }
`;

export const useQueryFetchUseditemQuestionAnswers = (
  useditemQuestionId: any
) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId },
  });

  return query;
};
