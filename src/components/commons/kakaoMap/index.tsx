// @ts-nocheck

import { useEffect } from "react";
import * as S from "./index.styled";

export default function KakaoMapPage(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1eb43d8b4157c3b6f8b95c19a43d7619&libraries=services";
    document.head.appendChild(script); // <head><script></script></head>

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address ? props.address : props.isEditData ?? "",

          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:200px;text-align:center;padding:6px;">${
                  props.address ? props.address : props.isEditData ?? ""
                }</div>`,
                // '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              });
              infowindow.open(map, marker);
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <S.Container>
      <S.KakaoMap id="map"></S.KakaoMap>
    </S.Container>
  );
}
