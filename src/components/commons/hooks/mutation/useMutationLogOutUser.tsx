import { gql, useMutation } from "@apollo/client";

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useMutationLogOutUser = () => {
  const mutation = useMutation(LOGOUT_USER);

  return mutation;
};
