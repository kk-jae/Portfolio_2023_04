import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "./../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query {
    fetchUseditemsIBought {
      _id
      name
      remarks
      contents
      price
      images
      buyer {
        name
      }
      seller {
        name
      }
      soldAt
    }
  }
`;

export const useQueryFetchUseditemsIBought = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_I_BOUGHT);

  return query;
};
