import { priceToString } from "../../../commons/libraries/price";
import { useQueryFetchUserLoggedIn } from "../../commons/hooks/query/useQueryFetchUserLoggedIn";
import * as S from "../myPage/index.styled";

export default function MyPageUI(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();

  return (
    <S.Container>
      <S.Wrapper>
        <h2>나의 프로필</h2>
        <S.Profile_Wrapper>
          <S.Profile_left>
            {data?.fetchUserLoggedIn.picture ? (
              <S.Profile_left_img
                src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
              />
            ) : (
              <S.Profile_left_img src="/image/img_user.png" />
            )}
          </S.Profile_left>
          <S.Profile_right>
            <S.Profile_right_text>
              <S.Right_selet>이름</S.Right_selet>{" "}
              {data?.fetchUserLoggedIn?.name}
            </S.Profile_right_text>
            <S.Profile_right_text>
              <S.Right_selet>이메일</S.Right_selet>{" "}
              {data?.fetchUserLoggedIn?.email}
            </S.Profile_right_text>
            <S.Profile_right_text>
              <S.Right_selet>포인트</S.Right_selet>{" "}
              {priceToString(
                Number(data?.fetchUserLoggedIn?.userPoint?.amount)
              )}{" "}
              원
            </S.Profile_right_text>
          </S.Profile_right>
        </S.Profile_Wrapper>
        <S.Baskets>
          <S.Baskets_left>오늘 본 상품</S.Baskets_left>
        </S.Baskets>
      </S.Wrapper>
    </S.Container>
  );
}
