import { gql, useMutation } from "@apollo/client";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useMutationCreateUseditem = () => {
  const mutation = useMutation(CREATE_USED_ITEM);

  return mutation;
};
