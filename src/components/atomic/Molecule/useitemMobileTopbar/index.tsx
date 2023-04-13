import {
  LogoutOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { UseUser } from "../../../commons/hooks/custom/useUser";
import { useQueryFetchUserLoggedIn } from "../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import Login from "../../atoms/loginModal";
import * as S from "./index.styled";
export const UsedItemMobileTopBar = () => {
  const { data } = useQueryFetchUserLoggedIn();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogOut } = UseUser();

  return (
    <div>
      {data ? (
        <S.Container>
          <S.Item_Wrapper>
            <S.Item_Detail onClick={onClickMoveToPage("/Market/mypage")}>
              <UserOutlined style={{ fontSize: "25px" }} /> 마이페이지
            </S.Item_Detail>
            <S.Item_Detail
              onClick={onClickMoveToPage("https://open.kakao.com/o/swFgJUef")}
            >
              <MessageOutlined style={{ fontSize: "25px" }} /> 문의하기
            </S.Item_Detail>
            <S.Item_Detail onClick={onClickLogOut}>
              <LogoutOutlined style={{ fontSize: "25px" }} /> 로그아웃
            </S.Item_Detail>
          </S.Item_Wrapper>
        </S.Container>
      ) : (
        <S.Container>
          <S.Item_Wrapper>
            <S.Item_Detail
              onClick={onClickMoveToPage("https://open.kakao.com/o/swFgJUef")}
            >
              <MessageOutlined style={{ fontSize: "25px" }} /> 문의하기
            </S.Item_Detail>
            <S.Item_Detail>
              <Login />
            </S.Item_Detail>
          </S.Item_Wrapper>
        </S.Container>
      )}
    </div>
  );
};
