import { Radio, RadioContainer } from './radio.styles';

type RadioProps = {
  type?: 'radio';
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioComponent({
  type = 'radio',
  id,
  name,
  value,
  checked = false,
  disabled = false,
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  },
}: RadioProps & { type?: 'radio' }) {
  return (
    <RadioContainer>
      <Radio
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      option 1
    </RadioContainer>
  );
}
