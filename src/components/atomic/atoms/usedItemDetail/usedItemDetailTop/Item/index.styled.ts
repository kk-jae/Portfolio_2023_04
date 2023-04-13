import styled from "@emotion/styled";
import { mediaQueries } from "../../../../../commons/libraries/MediaQueries";

export const Item = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Item_Img = styled.img`
  object-fit: contain;
  max-width: 50%;

  ${mediaQueries("phone")} {
    max-width: 80%;
  }
  ${mediaQueries("tablet")} {
    max-width: 50%;
  }
`;

export const Item_Contents = styled.div`
  margin-top: 20px;
`;
