import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import Modal from "react-modal";
import { Input } from "../Input";
import * as S from "./index.styled";

export default function ResetPassword() {
  const [showModal, setShowModal] = useState(false);
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

  return (
    <div>
      <S.Container onClick={handleShow}>로그인</S.Container>
      <Modal style={customStyles} isOpen={showModal}>
        <S.Cancel>
          <CloseOutlined onClick={handleClose} />
        </S.Cancel>
        <S.Wrapper>
          <S.Logo>Market</S.Logo>
          <S.UserImp>
            <Input
              placeholder="이메일을 입력해주세요."
              height={40}
              name="email"
            />
            <Input
              placeholder="비밀번호를 입력해주세요."
              height={40}
              name="password"
            />
            <S.Login>로그인</S.Login>
            <S.ResetPassword>비밀번호를 잃어버렸나요?</S.ResetPassword>
            <S.SighUp>회원이 아니신가요?</S.SighUp>
          </S.UserImp>
        </S.Wrapper>
      </Modal>
    </div>
  );
}
