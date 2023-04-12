import { FETCH_USER_LOGGED_IN } from "./../query/useQueryFetchUserLoggedIn";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "./../mutation/useMutationCreatePointTransactionOfBuyingAndSelling";
import { FETCH_USED_ITEM } from "./../query/useQueryFetchUseditem";
import { useMutationUpdateUsedItem } from "./../mutation/useMutationUpdateUseditem";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMutationCreateUseditem } from "../mutation/useMutationCreateUseditem";
import useMutationDeleteUsedItem from "../mutation/useMutationDeleteUseditem";
import { ChangeEvent, useState } from "react";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../query/useQueryFetchUseditems";

export const UseUsedItem = () => {
  const router = useRouter();
  const [createUsedItem] = useMutationCreateUseditem();
  const [deleteUsedItem] = useMutationDeleteUsedItem();
  const [updateUsedItem] = useMutationUpdateUsedItem();
  const [uploadFile] = useMutationUploadFile();
  const [buyUsedItem] = useMutationCreatePointTransactionOfBuyingAndSelling();
  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  interface IData {
    usedItemName?: string;
    title?: string;
    contents?: string;
    price?: string;
  }

  const onClickCreateUsedItem =
    (address: string, zipcode: string) => async (data: IData) => {
      if (
        !data.usedItemName ||
        !data.contents ||
        !data.price ||
        !imgUrl1 ||
        !address
      ) {
        Modal.error({
          content: "모두 입력해주세요",
        });
        return;
      }
      try {
        const result = await createUsedItem({
          variables: {
            createUseditemInput: {
              name: data.usedItemName,
              remarks: data.title,
              contents: data.contents,
              price: Number(data.price),
              images: [imgUrl1, imgUrl2],
              useditemAddress: {
                zipcode,
                address,
              },
            },
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEMS,
            },
          ],
        });
        Modal.success({
          content: "상품이 등록되었습니다.",
        });
        router.push("/Market/list");
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    };

  const onClickUpdateUsedItem =
    (
      useditemId: string,
      address: string,
      zipcode: string,
      imgUrl1: string | undefined,
      imgUrl2: string | undefined
    ) =>
    (editData: any) =>
    async (data: any) => {
      const useditemAddress = {
        zipcode,
        address,
      };
      const updateUseditemInput = {
        name: data.usedItemName,
        remarks: data.title,
        contents: data.contents,
        price: Number(data.price),
        useditemAddress: useditemAddress,
        images: [imgUrl1, imgUrl2],
      };
      if (!updateUseditemInput.name) updateUseditemInput.name = editData.name;
      if (!updateUseditemInput.remarks)
        updateUseditemInput.remarks = editData.remarks;
      if (!updateUseditemInput.contents)
        updateUseditemInput.contents = editData.contents;
      if (!updateUseditemInput.price)
        updateUseditemInput.price = Number(editData.price);

      try {
        await updateUsedItem({
          variables: {
            // @ts-ignore
            updateUseditemInput,
            useditemId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM,
              variables: { useditemId },
            },
          ],
        });
        Modal.success({
          content: "게시물이 수정되었습니다.",
        });
        router.push(`/Market/detail/${useditemId}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    };

  const onClickDeleteUsedItem = (useditemId: string) => async () => {
    try {
      await deleteUsedItem({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      Modal.success({
        content: "상품이 삭제되었습니다.",
      });
      router.push("/Market/list");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onChangeUploadFile1 = async (event: ChangeEvent<HTMLInputElement>) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl1(result.data.uploadFile.url ?? "");
  };
  const onChangeUploadFile2 = async (event: ChangeEvent<HTMLInputElement>) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl2(result.data.uploadFile.url ?? "");
  };

  const onClickBuyUsedItem = (useritemId: string) => async () => {
    try {
      await buyUsedItem({
        variables: {
          useritemId,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      Modal.success({
        content: "상품이 구매되었습니다. 안전거래하세요!",
      });
      router.push("/Market/list");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    onClickDeleteUsedItem,
    onChangeUploadFile1,
    onChangeUploadFile2,
    imgUrl1,
    imgUrl2,
    setImgUrl1,
    setImgUrl2,
    onClickBuyUsedItem,
  };
};
