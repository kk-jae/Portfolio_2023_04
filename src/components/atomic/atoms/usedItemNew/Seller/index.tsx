import { useRouter } from "next/router";
import { useQueryFetchUseditem } from "../../../../commons/hooks/query/useQueryFetchUseditem";
import { SellerItem } from "../Item";
import * as S from "./index.styled";
import { getDate } from "../../../../../commons/libraries/utils";
import { priceToString } from "../../../../../commons/libraries/price";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { AddressInput } from "../../address";

export const CreateImp = () => {
  const router = useRouter();

  const { data } = useQueryFetchUseditem(String(router.query.useditem));

  return (
    <S.Container>
      <S.Seller>
        <S.Seller_Top>
          <S.Seller_Top_Title>상품 등록</S.Seller_Top_Title>
        </S.Seller_Top>
        <S.Seller_Bottom>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>상품명</S.Seller_Bottom_Item_Title>
            <Input
              placeholder="상품명을 입력해주세요"
              width={500}
              height={50}
            />
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>상품 요약</S.Seller_Bottom_Item_Title>
            <Input placeholder="제목을 입력해주세요" width={500} height={50} />
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>상품 내용</S.Seller_Bottom_Item_Title>
            <Input
              placeholder="상품 내용을 입력해주세요"
              width={500}
              height={50}
            />
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>판매가격</S.Seller_Bottom_Item_Title>
            <Input
              placeholder="판매가격을 원 단위로 쉼표업이 적어주세요. 예) 10만원 -> 100000"
              width={500}
              height={50}
            />
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <AddressInput />
          </S.Seller_Bottom_Item>
          <S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item_Title>사진 첨부</S.Seller_Bottom_Item_Title>
            <Input
              placeholder="거래 위치를 입력해주세요"
              width={500}
              height={50}
              type="file"
            />
          </S.Seller_Bottom_Item>
        </S.Seller_Bottom>
      </S.Seller>
    </S.Container>
  );
};
