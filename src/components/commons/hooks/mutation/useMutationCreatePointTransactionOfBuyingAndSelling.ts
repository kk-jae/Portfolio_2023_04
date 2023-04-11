import { gql, useMutation } from "@apollo/client";

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

export const useMutationCreatePointTransactionOfBuyingAndSelling = () => {
  const mutation = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  return mutation;
};
