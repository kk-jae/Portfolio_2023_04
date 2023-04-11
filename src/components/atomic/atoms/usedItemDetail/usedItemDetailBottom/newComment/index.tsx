import { Button } from "../../../Button";
import * as S from "./index.styled";

export const NewComment = () => {
  return (
    <S.Container>
      <S.Top>댓글작성</S.Top>
      <S.Bottom>
        <S.Bottom_Text placeholder="비방, 홍보 및 유해성 댓글은 관리자에 의해 삭제 될 수 있습니다."></S.Bottom_Text>
        <Button title="등록" width={60} height={80} />
      </S.Bottom>
    </S.Container>
  );
};
