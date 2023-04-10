import DOMPurify from "dompurify";
import { IQuery } from "../../../../../../commons/types/generated/types";
import * as S from "./index.styled";

interface IProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export const SellerItem = (props: IProps) => {
  return (
    <S.Item>
      {props.data?.fetchUseditem.images?.map((el, index) => (
        <div key={index}>
          {el !== "" ? (
            <S.Item_Img src={`https://storage.googleapis.com/${el}`} />
          ) : (
            <div></div>
          )}
        </div>
      ))}
      <S.Item_Contents>
        {typeof window !== "undefined" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                String(props.data?.fetchUseditem.contents)
              ),
            }}
          />
        )}
      </S.Item_Contents>
    </S.Item>
  );
};
