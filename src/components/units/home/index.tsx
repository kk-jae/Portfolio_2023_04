import { Button } from "../../atomic/atoms/Button";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import * as S from "./index.styled";

export const HomeUI = () => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Left>
        <S.Left_Text>
          <S.Left_Text_Main>우리 동네 중고거래</S.Left_Text_Main>
          <S.Left_Text_Sub>
            <S.Market>MarKet</S.Market> 에서
          </S.Left_Text_Sub>
          <S.Left_Text_Bottom>
            내가 원하는 물건, 이제 간편하게 찾을 수 있습니다.
          </S.Left_Text_Bottom>
          <Button
            title="Market 상품 보러가기"
            width={170}
            onClick={onClickMoveToPage("/Market/list")}
          />
        </S.Left_Text>
      </S.Left>
      <S.Right>
        <S.Right_img src="/image/img_home.jpg" />
      </S.Right>
    </S.Container>
  );
};
