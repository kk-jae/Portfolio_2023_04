import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../stores";

export const useAuth = (): void => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.confirm({
          content: "로그인 후 이용 가능합니다.",
        });
        router.push("/Market/list");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
