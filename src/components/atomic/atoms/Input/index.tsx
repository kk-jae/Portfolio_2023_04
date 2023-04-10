import * as S from "./index.styled";

interface IInputProps {
  placeholder: string;
  disabled?: boolean;
  type?: string;
  width?: number;
  height?: number;
  value?: string | undefined;
}

export const Input = (props: IInputProps) => {
  return (
    <S.Input
      placeholder={props.placeholder}
      type={props.type}
      width={props.width}
      height={props.height}
      value={props.value ? props.value : undefined}
      disabled={props.disabled ? props.disabled : false}
    />
  );
};
