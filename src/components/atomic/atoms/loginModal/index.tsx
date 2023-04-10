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

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  Modal.setAppElement("#root");

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

  const onClickLogin = (data: IDate) => {
    console.log(data);
  };

  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  return (
    <>
      <S.Container onClick={handleShow} id="root">
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
              />
              <Input
                placeholder="비밀번호를 입력해주세요."
                name="password"
                type="password"
                width={300}
                height={40}
              />
              <Button title="로그인" width={200} />
              <SighUp />
            </FormProvider>
          </S.UserImp>
        </S.Wrapper>
      </Modal>
    </>
  );
}
