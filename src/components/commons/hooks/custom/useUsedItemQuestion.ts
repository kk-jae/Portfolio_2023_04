import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { useMutationCreateUseditemQuestion } from "./../mutation/useMutationCreateUseditemQuestion";
export const useUsedItemQuestion = (useditemId: string) => {
  const [createUsedItemQuestion] = useMutationCreateUseditemQuestion();

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
        Modal.success({
          content: "댓글이 등록되었습니다.",
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
  };
};
