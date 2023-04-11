import { Modal } from "antd";
import { useState } from "react";
import KakaoMapPage from "../../../commons/kakaoMap";
import { Button } from "../Button";
import { Input } from "../Input";
import * as S from "./index.styled";
import DaumPostcodeEmbed from "react-daum-postcode";

interface IAddressData {
  address?: string;
  zonecode?: string;
  setAddress?: any;
  setAddressZipCode?: any;
  setAddressDetail?: any;
  addressZipCode?: string;
}
export const AddressInput = (props: IAddressData) => {
  const [addressIsModalOpen, setAddressIsModalOpen] = useState(false);

  const AddressHandleComplete = (data: IAddressData) => {
    setAddressIsModalOpen(false);
    props.setAddressZipCode(data?.zonecode);
    props.setAddress(data?.address);
  };

  const AddressShowModal = () => {
    setAddressIsModalOpen((prev) => !prev);
  };

  return (
    <S.Item_address>
      <S.Item_Title>거래 위치</S.Item_Title>
      <S.Item_Map_Wrapper>
        <S.Map>
          <KakaoMapPage address={props.address} />
        </S.Map>
        <S.Address_Text>
          <S.Zipcode>
            <Input
              name="zipcode"
              placeholder="우편번호를 검색해주세요"
              width={200}
              height={50}
              value={props.addressZipCode}
              disabled={true}
            />
            <S.AddressBtn title="우편번호 검색" onClick={AddressShowModal}>
              우편번호 검색
            </S.AddressBtn>
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
            name="address"
            placeholder="주소를 검색해주세요"
            width={500}
            height={50}
            value={props.address}
            disabled={true}
          />
        </S.Address_Text>
      </S.Item_Map_Wrapper>
    </S.Item_address>
  );
};
