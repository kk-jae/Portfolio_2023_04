import { HeartOutlined } from "@ant-design/icons";
import { useQueryFetchUseditems } from "../../../commons/hooks/query/useQueryFetchUseditems";
import * as S from "./index.styled";
import DOMPurify from "dompurify";
import InfiniteScroll from "react-infinite-scroller";

export const ListItem = () => {
  const { data, fetchMore } = useQueryFetchUseditems();

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
      {data?.fetchUseditems.map((el) => (
        <S.ItemDetail key={el._id}>
          <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true}>
            {el.images?.[0] === "" || el.images?.length === 0 ? (
              <S.ItemImg src="/image/img_home.jpg" />
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
