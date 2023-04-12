import { useRouter } from "next/router";
import { priceToString } from "../../../../../../commons/libraries/price";
import { getDate } from "../../../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../../../commons/hooks/custom/useMoveToPage";
import { UseUsedItem } from "../../../../../commons/hooks/custom/useUsedItem";
import { useQueryFetchUseditem } from "../../../../../commons/hooks/query/useQueryFetchUseditem";
import { useQueryFetchUsedItemQuestions } from "../../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import { useQueryFetchUserLoggedIn } from "../../../../../commons/hooks/query/useQueryFetchUserLoggedIn";
import KakaoMapPage from "../../../../../commons/kakaoMap";
import { Button } from "../../../Button";
import { SellerItem } from "../Item";
import * as S from "./index.styled";

export const SellerImp = () => {
  const router = useRouter();

  const { data } = useQueryFetchUseditem(String(router.query.useditem));
  const { data: loginUser } = useQueryFetchUserLoggedIn();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDeleteUsedItem, onClickBuyUsedItem } = UseUsedItem();
  const { data: questionData } = useQueryFetchUsedItemQuestions(
    String(router.query.useditem)
  );

  return (
    <S.Container>
      <S.Seller>
        <S.Seller_Top>
          <S.Seller_Top_Title>{data?.fetchUseditem.remarks}</S.Seller_Top_Title>
          {data?.fetchUseditem.seller?.name ===
          loginUser?.fetchUserLoggedIn.name ? (
            <S.SellerBtn>
              <Button
                title="수정하기"
                onClick={onClickMoveToPage(
                  `/Market/detail/${router.query.useditem}/edit`
                )}
              />
              <Button
                title="삭제하기"
                onClick={onClickDeleteUsedItem(String(router.query.useditem))}
              />
            </S.SellerBtn>
          ) : (
            <S.SellerBtn>
              <Button
                title="구매하기"
                onClick={onClickBuyUsedItem(String(data?.fetchUseditem._id))}
              />
            </S.SellerBtn>
          )}
        </S.Seller_Top>
        <S.Seller_Middle>
          <S.Seller_Middle_Item>
            댓글 {questionData?.fetchUseditemQuestions.length}
          </S.Seller_Middle_Item>
          <S.Seller_Middle_Item>
            추천 {data?.fetchUseditem.pickedCount}
          </S.Seller_Middle_Item>
          <S.Seller_Middle_Item>
            작성일 {getDate(data?.fetchUseditem.createdAt)}
          </S.Seller_Middle_Item>
          <S.Seller_Middle_Item>
            작성자 {data?.fetchUseditem.seller?.name}
          </S.Seller_Middle_Item>
        </S.Seller_Middle>
        <S.Seller_Bottom>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>상품명</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub>
              {data?.fetchUseditem.name}
            </S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>판매가격</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub>
              {priceToString(Number(data?.fetchUseditem.price))} 원
            </S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>거래위치</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub
              style={{ width: "400px", height: "300px" }}
            >
              <KakaoMapPage
                address={data?.fetchUseditem.useditemAddress?.address}
              />
            </S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
        </S.Seller_Bottom>
      </S.Seller>
      <SellerItem data={data} />
    </S.Container>
  );
};
