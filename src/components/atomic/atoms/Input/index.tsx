import * as S from "./index.styled";
import { useFormContext } from "react-hook-form";
import { Maybe } from "../../../../commons/types/generated/types";

interface IInputProps {
  placeholder?: string;
  name: string;
  disabled?: boolean;
  type?: string;
  width?: number;
  height?: number;
  value?: string | undefined;
  defaultValue?: Maybe<number> | undefined | string;
}

export const Input = (props: IInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <S.Wrapper>
      <S.Input
        placeholder={props.placeholder}
        type={props.type}
        width={props.width}
        height={props.height}
        value={props.value ? props.value : undefined}
        disabled={props.disabled ? props.disabled : false}
        defaultValue={props.defaultValue ? props.defaultValue : ""}
        {...register(String(props.name))}
      />
      <S.Error>{errors[String(props.name)]?.message}</S.Error>
    </S.Wrapper>
  );
};
