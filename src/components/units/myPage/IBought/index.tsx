import { priceToString } from "../../../../commons/libraries/price";
import { getDate } from "../../../../commons/libraries/utils";
import { useQueryFetchUseditemsIBought } from "../../../commons/hooks/query/useQueryFetchUseditemsIBought";
import * as S from "./index.styled";
export const IBoughtList = () => {
  const { data } = useQueryFetchUseditemsIBought();

  return (
    <S.Container>
      <S.Wrapper>
        <h2>구매 목록</h2>
        <S.List_Wrapper>
          {data?.fetchUseditemsIBought.length === 0 ? (
            <div>구매한 상품이 없습니다.</div>
          ) : (
            <>
              {data?.fetchUseditemsIBought.map((el) => (
                <S.List_Detail key={el._id}>
                  <S.Left>
                    {el.images?.[0] ? (
                      <S.Left_Img
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      />
                    ) : (
                      <S.Left_Img src="/image/img_Market.png" />
                    )}
                  </S.Left>
                  <S.Right>
                    <S.Title>
                      <S.Title_item>상품명</S.Title_item>
                      <S.Detail>{el.name}</S.Detail>
                    </S.Title>
                    <S.Title>
                      <S.Title_item>구매날짜</S.Title_item>
                      <S.Detail>{getDate(el.soldAt)}</S.Detail>
                    </S.Title>
                    <S.Title>
                      <S.Title_item>가격</S.Title_item>
                      <S.Detail>{priceToString(Number(el.price))} P</S.Detail>
                    </S.Title>
                    <S.Title>
                      <S.Title_item>판매자</S.Title_item>
                      <S.Detail>{el.seller?.name}</S.Detail>
                    </S.Title>
                  </S.Right>
                </S.List_Detail>
              ))}
            </>
          )}
        </S.List_Wrapper>
      </S.Wrapper>
    </S.Container>
  );
};
