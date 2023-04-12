import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { UseUsedItemAnswer } from "../../../../../commons/hooks/custom/useUsedItemAnswer";
import { Button } from "../../../Button";
import * as S from "./index.styled";

interface IProps {
  questionId: string;
}

export const NewAnswer = (props: IProps) => {
  const router = useRouter();
  const [answerContents, setAnswerContents] = useState("");
  const { onClickCreateAnswer } = UseUsedItemAnswer();

  const onChangeAnswer = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerContents(event.target.value);
  };

  return (
    <S.Container>
      <S.Bottom>
        <S.Bottom_Text
          onChange={onChangeAnswer}
          placeholder="답글을 입력하세요"
        ></S.Bottom_Text>
        <Button
          title="등록"
          width={60}
          height={80}
          onClick={onClickCreateAnswer(props.questionId, answerContents)}
        />
      </S.Bottom>
    </S.Container>
  );
};
