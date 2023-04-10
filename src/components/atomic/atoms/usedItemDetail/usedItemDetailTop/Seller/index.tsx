import { useRouter } from "next/router";
import { priceToString } from "../../../../../../commons/libraries/price";
import { getDate } from "../../../../../../commons/libraries/utils";
import { useQueryFetchUseditem } from "../../../../../commons/hooks/query/useQueryFetchUseditem";
import { SellerItem } from "../Item";
import * as S from "./index.styled";

export const SellerImp = () => {
  const router = useRouter();

  const { data } = useQueryFetchUseditem(String(router.query.useditem));

  return (
    <S.Container>
      <S.Seller>
        <S.Seller_Top>
          <S.Seller_Top_Title>{data?.fetchUseditem.remarks}</S.Seller_Top_Title>
        </S.Seller_Top>
        <S.Seller_Middle>
          <S.Seller_Middle_Item>조회 1,170</S.Seller_Middle_Item>
          <S.Seller_Middle_Item>댓글 2</S.Seller_Middle_Item>
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
            <S.Seller_Bottom_Item_Title>주소</S.Seller_Bottom_Item_Title>
            <S.Seller_Bottom_Item_Sub>
              {data?.fetchUseditem.useditemAddress?.address}
            </S.Seller_Bottom_Item_Sub>
          </S.Seller_Bottom_Item>
        </S.Seller_Bottom>
      </S.Seller>
      <SellerItem data={data} />
    </S.Container>
  );
};
