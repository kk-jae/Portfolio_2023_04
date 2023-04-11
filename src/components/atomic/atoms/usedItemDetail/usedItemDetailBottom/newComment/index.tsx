import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useUsedItemQuestion } from "../../../../../commons/hooks/custom/useUsedItemQuestion";
import { Button } from "../../../Button";
import * as S from "./index.styled";

export const NewComment = () => {
  const router = useRouter();
  const [questionContents, setQuestionContents] = useState("");

  const { onClickCreateUsedItemQuestion } = useUsedItemQuestion(
    String(router.query.useditem)
  );

  const onChangeQuestion = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionContents(event.target.value);
  };

  return (
    <S.Container>
      <S.Top>댓글작성</S.Top>
      <S.Bottom>
        <S.Bottom_Text
          onChange={onChangeQuestion}
          placeholder="비방, 홍보 및 유해성 댓글은 관리자에 의해 삭제 될 수 있습니다."
        ></S.Bottom_Text>
        <Button
          title="등록"
          width={60}
          height={80}
          onClick={onClickCreateUsedItemQuestion(questionContents)}
        />
      </S.Bottom>
    </S.Container>
  );
};
