import { Input, InputWrapper } from './input.styles';

type InputProps = {
  id: string;
  placeholder?: string;
  type?: string;
  value?: string | number | string[];
  width?: string;
  maxlength?: number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputComponent({
  id,
  placeholder,
  type,
  value,
  width,
  maxlength,
  disabled,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <label htmlFor={id}>{placeholder}</label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        width={width}
        maxLength={maxlength}
        disabled={disabled}
        onChange={onChange}
      />
    </InputWrapper>
  );
}
