import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import { useState } from "react";
import { getDate } from "../../../../../../commons/libraries/utils";
import { useUsedItemQuestion } from "../../../../../commons/hooks/custom/useUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import { useQueryFetchUserLoggedIn } from "../../../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import { ListAnswer } from "../listAnswer";
import { NewAnswer } from "../newAnswer";
import * as S from "./index.styled";

export const ListComment = () => {
  const router = useRouter();
  const { data } = useQueryFetchUsedItemQuestions(
    String(router.query.useditem)
  );
  const { onClickDeleteQuestion } = useUsedItemQuestion(
    String(router.query.useditem)
  );
  const { data: loginUser } = useQueryFetchUserLoggedIn();

  const [isActiveAnswer, setIsActiveAnswer] = useState(false);
  const [questionId, setQuestionId] = useState("");

  const onClickIsActiveAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    setQuestionId(event.currentTarget.id);
    setIsActiveAnswer((prev) => !prev);
  };

  return (
    <>
      {data?.fetchUseditemQuestions.length !== 0 ? (
        <S.Container>
          <S.Top>댓글({data?.fetchUseditemQuestions.length})</S.Top>
          {data?.fetchUseditemQuestions.map((el, index) => (
            <S.Bottom key={el._id}>
              {el.user.picture !== null ? (
                <S.Left
                  src={`https://storage.googleapis.com/${el.user.picture}`}
                />
              ) : (
                <S.Left src="/image/img_user.png" />
              )}

              <S.Center>
                <S.Center_Name>{el.user.name}</S.Center_Name>
                <S.Center_Contents>{el.contents}</S.Center_Contents>
                <S.Center_Answer>
                  <S.Center_Answer_Item
                    onClick={onClickIsActiveAnswer}
                    id={el._id}
                  >
                    답글달기
                  </S.Center_Answer_Item>
                  {el.user.name === loginUser?.fetchUserLoggedIn.name ? (
                    <S.Center_Answer_Item
                      onClick={onClickDeleteQuestion(el._id)}
                      id={el._id}
                    >
                      삭제하기
                    </S.Center_Answer_Item>
                  ) : (
                    <div></div>
                  )}
                </S.Center_Answer>
                {el._id === questionId && isActiveAnswer ? (
                  <NewAnswer questionId={el._id} />
                ) : (
                  <div></div>
                )}
                <ListAnswer questionId={el._id} index={index} />
              </S.Center>
              <S.Right>{getDate(el.createdAt)}</S.Right>
            </S.Bottom>
          ))}
        </S.Container>
      ) : (
        <div></div>
      )}
    </>
  );
};
