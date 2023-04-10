import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "./../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      buyer
      seller
    }
  }
`;
export const useQueryFetchUseditem = (useditemId: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId,
    },
  });

  return query;
};
