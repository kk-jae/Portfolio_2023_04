import { CloseOutlined, LoginOutlined } from "@ant-design/icons";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import Modal from "react-modal";
import { Input } from "../Input";
import SighUp from "../sighUpModal";
import * as S from "./index.styled";
import { Button } from "../Button";
import { Schema } from "../../../commons/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseUser } from "../../../commons/hooks/custom/useUser";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const { onClickLogin } = UseUser();

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "450px",
      borderRadius: "10px",
    },
  };

  interface IDate {
    email?: string;
    password?: string;
  }

  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  return (
    <>
      <S.Container onClick={handleShow}>
        <LoginOutlined style={{ fontSize: "25px" }} />
        <S.Container>로그인</S.Container>
      </S.Container>
      <Modal style={customStyles} isOpen={showModal}>
        <S.Cancel>
          <CloseOutlined onClick={handleClose} />
        </S.Cancel>
        <S.Wrapper>
          <S.Logo>Market</S.Logo>
          <S.UserImp onSubmit={method.handleSubmit(onClickLogin)}>
            <FormProvider {...method}>
              <Input
                placeholder="이메일을 입력해주세요."
                name="email"
                type="email"
                width={300}
                height={40}
                value="kk_jae@naver.com"
              />
              <Input
                placeholder="비밀번호를 입력해주세요."
                name="password"
                type="password"
                width={300}
                height={40}
                value="123"
              />
              <Button title="로그인" width={200} />
            </FormProvider>
          </S.UserImp>
          <S.SighUpWrapper>
            <SighUp />
          </S.SighUpWrapper>
        </S.Wrapper>
      </Modal>
    </>
  );
}
