import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import Modal from "react-modal";
import { Input } from "../Input";
import * as S from "./index.styled";

export default function SighUp() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const onClickSighUp = () => {
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
    <>
      <S.Container onClick={handleShow}>회원이 아니신가요?</S.Container>
      <Modal style={customStyles} isOpen={showModal}>
        <S.Cancel>
          <CloseOutlined onClick={handleClose} />
        </S.Cancel>
        <S.Wrapper>
          <S.Logo>Market</S.Logo>
          <S.UserImp>
            <Input placeholder="닉네임을 입력해주세요." height={40} />
            <Input placeholder="이메일을 입력해주세요." height={40} />
            <Input placeholder="비밀번호를 입력해주세요." height={40} />
            <Input placeholder="비밀번호를 확인해주세요." height={40} />
            <S.SighUp onClick={onClickSighUp}>회원가입</S.SighUp>
          </S.UserImp>
        </S.Wrapper>
      </Modal>
    </>
  );
}
