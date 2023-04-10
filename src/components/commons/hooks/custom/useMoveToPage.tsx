import { useRouter } from "next/router";

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (url: string) => () => {
    router.push(url);
  };
  return {
    onClickMoveToPage,
  };
};
