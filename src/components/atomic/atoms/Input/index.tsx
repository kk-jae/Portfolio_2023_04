import * as S from "./index.styled";

interface IInputProps {
  placeholder: string;
  type?: string;
  width?: number;
  height?: number;
}

export const Input = (props: IInputProps) => {
  return (
    <S.Input
      placeholder={props.placeholder}
      type={props.type}
      width={props.width}
      height={props.height}
    />
  );
};
