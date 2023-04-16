import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (accessToken === "") {
      Modal.confirm({
        content: "로그인 후 이용 가능합니다.",
      });
      router.push("/Market/list");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
