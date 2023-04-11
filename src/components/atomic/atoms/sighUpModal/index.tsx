import { CloseOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Modal from "react-modal";
import { UseUser } from "../../../commons/hooks/custom/useUser";
import { Schema } from "../../../commons/validation";
import { Button } from "../Button";
import { Input } from "../Input";
import * as S from "./index.styled";

export default function SighUp() {
  const [showModal, setShowModal] = useState(false);

  const { onClickSighUp } = UseUser();

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
  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  return (
    <>
      <S.Container onClick={handleShow}>회원이 아니신가요?</S.Container>
      <Modal style={customStyles} isOpen={showModal}>
        <S.Cancel>
          <CloseOutlined onClick={handleClose} />
        </S.Cancel>
        <FormProvider {...method}>
          <S.Wrapper onSubmit={method.handleSubmit(onClickSighUp)}>
            <S.Logo>Market</S.Logo>
            <S.UserImp>
              <Input
                placeholder="닉네임을 입력해주세요."
                height={40}
                width={300}
                name="name"
              />
              <Input
                placeholder="이메일을 입력해주세요."
                height={40}
                width={300}
                name="email"
                type="email"
              />
              <Input
                placeholder="비밀번호를 입력해주세요."
                height={40}
                width={300}
                name="password"
                type="password"
              />
              <Input
                placeholder="비밀번호를 확인해주세요."
                height={40}
                width={300}
                name="password2"
                type="password"
              />
              <Button title="회원가입" width={200} />
            </S.UserImp>
          </S.Wrapper>
        </FormProvider>
      </Modal>
    </>
  );
}
