import { Modal } from "antd";
import useMutationDeleteUseditemQuestion from "../mutation/useMutationDeleteUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { useMutationCreateUseditemQuestion } from "./../mutation/useMutationCreateUseditemQuestion";
export const useUsedItemQuestion = (useditemId: string) => {
  const [createUsedItemQuestion] = useMutationCreateUseditemQuestion();
  const [deleteUsedItemQuestion] = useMutationDeleteUseditemQuestion();

  const onClickCreateUsedItemQuestion =
    (questionContents: string) => async () => {
      try {
        await createUsedItemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: String(questionContents),
            },
            useditemId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId,
              },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    };

  const onClickDeleteQuestion = (useditemQuestionId: string) => async () => {
    try {
      await deleteUsedItemQuestion({
        variables: {
          useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId,
            },
          },
        ],
      });
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return {
    onClickCreateUsedItemQuestion,
    onClickDeleteQuestion,
  };
};
