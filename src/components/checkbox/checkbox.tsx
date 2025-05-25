import { Checkbox } from './checkbox.styles';

type CheckboxProps = {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxComponent({
  id,
  checked,
  disabled,
  value,
  onChange,
}: CheckboxProps) {
  return (
    <div>
      <label htmlFor={id}>
        <Checkbox
          type='checkbox'
          id={id}
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {value || 'Checkbox'}
      </label>
    </div>
  );
}
