import { useMutationUpdateUsedItem } from "./../mutation/useMutationUpdateUseditem";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "../query/useQueryFetchUseditems";
import { Modal } from "antd";
import { useMutationCreateUseditem } from "../mutation/useMutationCreateUseditem";
import useMutationDeleteUsedItem from "../mutation/useMutationDeleteUseditem";
import { ChangeEvent, useState } from "react";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";

export const UseUsedItem = () => {
  const router = useRouter();
  const [createUsedItem] = useMutationCreateUseditem();
  const [deleteUsedItem] = useMutationDeleteUsedItem();
  const [updateUsedItem] = useMutationUpdateUsedItem();
  const [uploadFile] = useMutationUploadFile();
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
    (useditemId: string, address: string, zipcode: string) => async (data) => {
      const updateUseditemInput = {};

      console.log(data);
      // try {
      //   await updateUsedItem({
      //     variables: {
      //       updateUseditemInput: updateUseditemInput,
      //       useditemId,
      //     },
      //   });
      //   Modal.success({
      //     content: "게시물이 수정되었습니다.",
      //   });
      // } catch (error) {
      //   if (error instanceof Error)
      //     Modal.error({
      //       content: error.message,
      //     });
      // }
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

  return {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    onClickDeleteUsedItem,
    onChangeUploadFile1,
    onChangeUploadFile2,
    imgUrl1,
    imgUrl2,
  };
};
