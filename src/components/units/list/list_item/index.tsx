import { HeartOutlined } from "@ant-design/icons";
import { useQueryFetchUseditems } from "../../../commons/hooks/query/useQueryFetchUseditems";
import * as S from "./index.styled";
import DOMPurify from "dompurify";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";

export const ListItem = () => {
  const { data, fetchMore } = useQueryFetchUseditems();
  const { onClickMoveToPage } = useMoveToPage();

  const loadFunc = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <S.Container>
      {data?.fetchUseditems.map((el, index) => (
        <S.ItemDetail
          key={index}
          onClick={onClickMoveToPage(`/Market/${el._id}`)}
        >
          <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true}>
            {el.images?.[0] === "" || el.images?.length === 0 ? (
              <S.ItemImg
                src="/image/img_Market.png"
                style={{
                  padding: "80px",
                }}
              />
            ) : (
              <S.ItemImg
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
              />
            )}
            <S.ItemImp>
              <S.ItemName>
                {typeof window !== "undefined" && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.contents),
                    }}
                  />
                )}
                <S.ItemPick>
                  <HeartOutlined /> {el.pickedCount}
                </S.ItemPick>
              </S.ItemName>
            </S.ItemImp>
          </InfiniteScroll>
        </S.ItemDetail>
      ))}
    </S.Container>
  );
};
