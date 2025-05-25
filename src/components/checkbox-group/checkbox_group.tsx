import CheckboxComponent from '../checkbox/checkbox';

type CheckboxGroupProps = {
  // Define any props you want to pass to the CheckboxGroup
  options: Array<{
    id: string;
    checked?: boolean;
    disabled?: boolean;
    value?: string;
    width?: string;
    label: string;
  }>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxGroupComponent({
  options,
  onChange,
}: CheckboxGroupProps) {
  return (
    <div>
      {options.map((option) => (
        <CheckboxComponent
          id={option.id}
          key={option.id}
          value={option.value}
          onChange={onChange}
          checked={option.checked}
          disabled={option.disabled}
          //width={option}.width || 'auto' // Default width if not provided}
        />
      ))}
    </div>
  );
}
