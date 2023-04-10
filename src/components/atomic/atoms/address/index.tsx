import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import KakaoMapPage from "../../../commons/kakaoMap";
import { Button } from "../Button";
import { Input } from "../Input";
import * as S from "./index.styled";
import DaumPostcodeEmbed from "react-daum-postcode";

export const AddressInput = () => {
  const [addressIsModalOpen, setAddressIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  interface IAddressData {
    address: string;
    zonecode: string;
  }
  const AddressHandleComplete = (data: IAddressData) => {
    setAddressIsModalOpen(false);
    setAddressZipCode(data?.zonecode);
    setAddress(data?.address);
  };

  // const onChangeAddressDetail = (event:MouseEvent<HTMLDivElement>):void => {
  //   setAddressDetail(event.target.value);
  // };

  const AddressShowModal = () => {
    setAddressIsModalOpen((prev) => !prev);
  };

  return (
    <S.Item_address>
      <S.Item_Title>거래 위치</S.Item_Title>
      <S.Item_Map_Wrapper>
        <S.Map>
          <KakaoMapPage address={address} />
        </S.Map>
        <S.Address_Text>
          <S.Zipcode>
            <Input
              placeholder="우편번호를 검색해주세요"
              width={200}
              height={50}
              value={addressZipCode}
              disabled={true}
            />
            <Button
              title="우편번호 검색"
              height={50}
              onClick={AddressShowModal}
            />
            {addressIsModalOpen && (
              <Modal
                open={true}
                onOk={AddressShowModal}
                onCancel={AddressShowModal}
              >
                <DaumPostcodeEmbed onComplete={AddressHandleComplete} />
              </Modal>
            )}
          </S.Zipcode>
          <Input
            placeholder="주소를 검색해주세요"
            width={500}
            height={50}
            value={address}
            disabled={true}
          />
          <Input
            placeholder="상세주소를 입력해주세요"
            width={500}
            height={50}
          />
        </S.Address_Text>
      </S.Item_Map_Wrapper>
    </S.Item_address>
  );
};
