import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./../query/useQueryFetchUseditemQuestionAnswers";
import { Modal } from "antd";
import { useMutationCreateUseditemQuestionAnswer } from "./../mutation/useMutationCreateUseditemQuestionAnswer";
import useMutationDeleteUseditemQuestionAnswer from "../mutation/useMutationDeleteUseditemQuestionAnswer";
export const UseUsedItemAnswer = () => {
  const [createAnswer] = useMutationCreateUseditemQuestionAnswer();
  const [deleteAnswer] = useMutationDeleteUseditemQuestionAnswer();

  const onClickCreateAnswer =
    (useditemQuestionId: string, contents: string) => async () => {
      try {
        await createAnswer({
          variables: {
            useditemQuestionId,
            createUseditemQuestionAnswerInput: {
              contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: { useditemQuestionId },
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

  const onClickDeleteAnswer =
    (useditemQuestionAnswerId: string, useditemQuestionId: string) =>
    async () => {
      try {
        await deleteAnswer({
          variables: {
            useditemQuestionAnswerId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: { useditemQuestionId },
            },
          ],
        });
        Modal.success({
          content: "답글이 삭제되었습니다.",
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
    onClickCreateAnswer,
    onClickDeleteAnswer,
  };
};
