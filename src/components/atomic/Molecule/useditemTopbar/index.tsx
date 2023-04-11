import * as S from "./index.styled";
import Login from "../../atoms/loginModal";
import {
  DollarCircleOutlined,
  LoginOutlined,
  LogoutOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import { UseUser } from "../../../commons/hooks/custom/useUser";
import PaymentUI from "../../../units/payment";
import { priceToString } from "../../../../commons/libraries/price";

export const UsedItemTopBar = () => {
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogOut } = UseUser();
  const { data } = useQueryFetchUserLoggedIn();

  return (
    <S.Container>
      <S.Left>
        <S.Logo onClick={onClickMoveToPage("/Market/home")}>Market</S.Logo>
      </S.Left>
      {data ? (
        <S.Right>
          <S.Right_Item_My>
            <S.My_Imp>
              <span style={{ fontWeight: "600" }}>
                {data?.fetchUserLoggedIn.name}
              </span>
              님 포인트
            </S.My_Imp>
            <S.My_Point>
              <span style={{ fontWeight: "700", textDecoration: "underline" }}>
                {"  "}
                {priceToString(
                  Number(data?.fetchUserLoggedIn.userPoint?.amount)
                )}
                P
              </span>{" "}
            </S.My_Point>
          </S.Right_Item_My>
          <S.Right_Item>
            <PaymentUI />
          </S.Right_Item>
          <S.Right_Item>
            <MessageOutlined style={{ fontSize: "25px" }} />
            <S.SendMessage>문의하기</S.SendMessage>
          </S.Right_Item>
          <S.Right_Item onClick={onClickMoveToPage("/Market/mypage")}>
            <UserOutlined style={{ fontSize: "25px" }} />
            <S.SendMessage>마이페이지</S.SendMessage>
          </S.Right_Item>
          <S.Right_Item onClick={onClickLogOut}>
            <LogoutOutlined style={{ fontSize: "25px" }} />
            <S.SendMessage>로그아웃</S.SendMessage>
          </S.Right_Item>
        </S.Right>
      ) : (
        <S.Right>
          <S.Right_Item>
            <MessageOutlined style={{ fontSize: "25px" }} />
            <S.SendMessage>문의하기</S.SendMessage>
          </S.Right_Item>
          <S.Right_Item>
            <Login />
          </S.Right_Item>
        </S.Right>
      )}
    </S.Container>
  );
};
