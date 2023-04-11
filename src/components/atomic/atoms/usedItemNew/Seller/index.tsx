import * as S from "./index.styled";
import { Input } from "../../Input";
import { AddressInput } from "../../address";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../../commons/validation";
import { UseUsedItem } from "../../../../commons/hooks/custom/useUsedItem";
import { Button } from "../../Button";
import { useRef, useState } from "react";
import { IEditProps } from "../../../../units/newUsedItem";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { useRouter } from "next/router";
import { useQueryFetchUseditem } from "../../../../commons/hooks/query/useQueryFetchUseditem";

export const CreateImp = (props: IEditProps) => {
  const router = useRouter();
  const { data: editData } = useQueryFetchUseditem(
    String(router.query.useditem)
  );

  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  const {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    onChangeUploadFile1,
    onChangeUploadFile2,
    imgUrl1,
    imgUrl2,
  } = UseUsedItem();
  const [address, setAddress] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");

  const ImgRef1 = useRef<HTMLInputElement>(null);
  const ImgRef2 = useRef<HTMLInputElement>(null);

  const onClickImgRef1 = () => {
    ImgRef1.current?.click();
  };
  const onClickImgRef2 = () => {
    ImgRef2.current?.click();
  };

  return (
    <S.Container>
      <S.Seller>
        <S.Seller_Top>
          <S.Seller_Top_Title>
            {props.isEdit ? "상품 수정" : "상품 등록"}
          </S.Seller_Top_Title>
        </S.Seller_Top>
        <FormProvider {...method}>
          <S.Seller_Bottom
            onSubmit={
              props.isEdit
                ? method.handleSubmit(
                    onClickUpdateUsedItem(
                      String(router.query.useditem),
                      address,
                      addressZipCode
                    )
                  )
                : method.handleSubmit(
                    onClickCreateUsedItem(address, addressZipCode)
                  )
            }
          >
            <S.Seller_Bottom_Item>
              <S.Seller_Bottom_Item_Title>상품명</S.Seller_Bottom_Item_Title>
              <Input
                name="usedItemName"
                placeholder="상품명을 입력해주세요"
                width={500}
                height={50}
                defaultValue={editData?.fetchUseditem.name}
              />
            </S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item>
              <S.Seller_Bottom_Item_Title>상품 요약</S.Seller_Bottom_Item_Title>
              <Input
                placeholder="제목을 입력해주세요"
                width={500}
                height={50}
                name="title"
              />
            </S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item>
              <S.Seller_Bottom_Item_Title>상품 내용</S.Seller_Bottom_Item_Title>
              <Input
                name="contents"
                placeholder="상품 설명을 입력해주세요"
                width={500}
                height={50}
              />
            </S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item>
              <S.Seller_Bottom_Item_Title>판매가격</S.Seller_Bottom_Item_Title>
              <Input
                name="price"
                placeholder="판매가격을 원 단위로 쉼표업이 적어주세요. 예) 10만원 -> 100000"
                width={500}
                height={50}
              />
            </S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item>
              <AddressInput
                setAddress={setAddress}
                setAddressZipCode={setAddressZipCode}
                address={address}
                addressZipCode={addressZipCode}
              />
            </S.Seller_Bottom_Item>
            <S.Seller_Bottom_Item>
              <S.Seller_Bottom_Item_Title>사진 첨부</S.Seller_Bottom_Item_Title>
              <S.Img_Wrapper>
                <S.Img>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={ImgRef1}
                    onChange={onChangeUploadFile1}
                  />
                  {imgUrl1 ? (
                    <S.Img_Item
                      onClick={onClickImgRef1}
                      src={`https://storage.googleapis.com/${imgUrl1}`}
                    />
                  ) : (
                    <S.Img_Item
                      onClick={onClickImgRef1}
                      src={"/image/icon-image-plus.svg"}
                    />
                  )}
                </S.Img>
                <S.Img>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={ImgRef2}
                    onChange={onChangeUploadFile2}
                  />
                  {imgUrl2 ? (
                    <S.Img_Item
                      onClick={onClickImgRef2}
                      src={`https://storage.googleapis.com/${imgUrl2}`}
                    />
                  ) : (
                    <S.Img_Item
                      onClick={onClickImgRef2}
                      src={"/image/icon-image-plus.svg"}
                    />
                  )}
                </S.Img>
              </S.Img_Wrapper>
            </S.Seller_Bottom_Item>
            <S.BtnWrapper>
              <Button
                title={props.isEdit ? "상품 수정하기" : "상품 등록하기"}
              />
            </S.BtnWrapper>
          </S.Seller_Bottom>
        </FormProvider>
      </S.Seller>
    </S.Container>
  );
};
