import { useRouter } from "next/router";
import { getDate } from "../../../../../../commons/libraries/utils";
import { useQueryFetchUsedItemQuestions } from "../../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import { Button } from "../../../Button";
import * as S from "./index.styled";

export const ListComment = () => {
  const router = useRouter();

  const { data } = useQueryFetchUsedItemQuestions(
    String(router.query.useditem)
  );

  return (
    <>
      {data?.fetchUseditemQuestions.length !== 0 ? (
        <S.Container>
          <S.Top>댓글({data?.fetchUseditemQuestions.length})</S.Top>
          {data?.fetchUseditemQuestions.map((el, index) => (
            <S.Bottom key={index}>
              {el.user.picture !== null ? (
                <S.Left
                  src={`https://storage.googleapis.com/${el.user.picture}`}
                />
              ) : (
                <S.Left src="/image/img_user.png" />
              )}

              <S.Center>
                <S.Center_Name>{el.user.name}</S.Center_Name>
                <S.Center_Contents>{el.contents}</S.Center_Contents>
                <S.Center_Answer>
                  <S.Center_Answer_Item>답글달기</S.Center_Answer_Item>
                </S.Center_Answer>
              </S.Center>
              <S.Right>{getDate(el.createdAt)}</S.Right>
            </S.Bottom>
          ))}
        </S.Container>
      ) : (
        <div></div>
      )}
    </>
  );
};
