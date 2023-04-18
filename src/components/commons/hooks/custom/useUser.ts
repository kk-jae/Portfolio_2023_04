import { useMutationLoginUser } from "./../mutation/useMutationLoginUser";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMutationCreateUser } from "../mutation/useMutationCreateUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores";
import { useMutationLogOutUser } from "../mutation/useMutationLogOutUser";

interface IDate {
  name?: string;
  email?: string;
  password?: string;
}
export const UseUser = () => {
  const router = useRouter();
  const [createUser] = useMutationCreateUser();
  const [LoginUser] = useMutationLoginUser();
  const [logOutUser] = useMutationLogOutUser();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickSighUp = async (data: IDate) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      Modal.success({
        content: `${data.name}님 회원가입을 축하합니다.`,
      });
      router.push("/Market/home");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickLogin = async (data: IDate) => {
    try {
      const createLogIn = await LoginUser({
        variables: {
          password: data.password,
          email: data.email,
        },
      });
      Modal.success({
        content: "로그인에 성공하였습니다.",
      });
      const accessToken = createLogIn.data?.loginUser.accessToken;
      if (accessToken !== undefined) {
        setAccessToken(accessToken);
      }
      window.location.replace("/Market/list");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickLogOut = async () => {
    await logOutUser();
    window.location.replace("/Market/home");
  };

  return {
    onClickSighUp,
    onClickLogin,
    onClickLogOut,
  };
};
