import { useEffect, useState } from "react";
import { priceToString } from "../../../commons/libraries/price";
import { useQueryFetchUserLoggedIn } from "../../commons/hooks/query/useQueryFetchUserLoggedIn";
import * as S from "../myPage/index.styled";
import { IBoughtList } from "./IBought";

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
              <S.Right_select>이름</S.Right_select>{" "}
              {data?.fetchUserLoggedIn?.name}
            </S.Profile_right_text>
            <S.Profile_right_text>
              <S.Right_select>이메일</S.Right_select>{" "}
              {data?.fetchUserLoggedIn?.email}
            </S.Profile_right_text>
            <S.Profile_right_text>
              <S.Right_select>포인트</S.Right_select>{" "}
              {priceToString(
                Number(data?.fetchUserLoggedIn?.userPoint?.amount)
              )}{" "}
              원
            </S.Profile_right_text>
          </S.Profile_right>
        </S.Profile_Wrapper>
      </S.Wrapper>
      <IBoughtList />
    </S.Container>
  );
}
