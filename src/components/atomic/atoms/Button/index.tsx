import { MouseEvent } from "react";
import * as S from "./index.styled";

interface IProps {
  title: string;
  width?: number;
  height?: number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: IProps) => {
  return (
    <S.Button width={props.width} height={props.height} onClick={props.onClick}>
      {props.title}
    </S.Button>
  );
};
