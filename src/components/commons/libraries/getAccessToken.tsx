import { gql, GraphQLClient } from "graphql-request";
import { IMutation } from "../../../commons/types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend11.codebootcamp.co.kr/graphql08",
      { credentials: "include" }
    );
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
