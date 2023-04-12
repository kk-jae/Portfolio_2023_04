import { EnterOutlined } from "@ant-design/icons";
import { getDate } from "../../../../../../commons/libraries/utils";
import { UseUsedItemAnswer } from "../../../../../commons/hooks/custom/useUsedItemAnswer";
import { useQueryFetchUseditemQuestionAnswers } from "../../../../../commons/hooks/query/useQueryFetchUseditemQuestionAnswers";
import { useQueryFetchUserLoggedIn } from "../../../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import * as S from "./index.styled";

interface IProp {
  questionId: string;
  index: number;
}

export const ListAnswer = (props: IProp) => {
  const { data } = useQueryFetchUseditemQuestionAnswers(props.questionId);
  const { onClickDeleteAnswer } = UseUsedItemAnswer();
  const { data: loginData } = useQueryFetchUserLoggedIn();

  return (
    <S.Container>
      {data?.fetchUseditemQuestionAnswers.map((el, index) => (
        <S.AnswerContainer key={index}>
          <S.Icon>
            <EnterOutlined />
          </S.Icon>
          <S.Left>
            <S.Name>{el.user.name}</S.Name>
            <S.Contents>{el.contents}</S.Contents>
            {el.user.name === loginData?.fetchUserLoggedIn.name ? (
              <S.Delete onClick={onClickDeleteAnswer(el._id, props.questionId)}>
                삭제하기
              </S.Delete>
            ) : (
              <div></div>
            )}
          </S.Left>
          <S.Right>{getDate(el.createdAt)}</S.Right>
        </S.AnswerContainer>
      ))}
    </S.Container>
  );
};
