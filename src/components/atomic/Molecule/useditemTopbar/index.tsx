import * as S from "./index.styled";
import Login from "../../atoms/loginModal";
import { LoginOutlined, MessageOutlined } from "@ant-design/icons";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";

export const UsedItemTopBar = () => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Left>
        <S.Logo onClick={onClickMoveToPage("/Market/home")}>Market</S.Logo>
      </S.Left>
      <S.Right>
        <S.Right_Item>
          <MessageOutlined style={{ fontSize: "25px" }} />
          <S.SendMessage>채팅하기</S.SendMessage>
        </S.Right_Item>
        <S.Right_Item>
          <Login />
        </S.Right_Item>
      </S.Right>
    </S.Container>
  );
};
