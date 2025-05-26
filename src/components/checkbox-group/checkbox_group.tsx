import CheckboxComponent from '../checkbox/checkbox';

import {
  CheckboxGroupWrapper,
  CheckboxGroup,
  CheckboxGroupLegend,
  CheckboxGroupFieldset,
} from './checkbox_group.styles';

const data = [
  {
    id: 'item1',
    label: 'Item 1',
    options: [{ id: 'checkbox1', label: 'Checkbox 1' }],
  },
  {
    id: 'item2',
    label: 'Item 2',
    options: [{ id: 'checkbox2', label: 'Checkbox 2', checked: true }],
  },
  {
    id: 'item3',
    label: 'Item 3',
    options: [{ id: 'checkbox3', label: 'Checkbox 3', disabled: true }],
  },
];

type options = {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  width?: string;
};

type CheckboxGroupProps = {
  // Define any props you want to pass to the CheckboxGroup
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
  gap?: string;
  alignContent?: string;
  justifyContent?: string;
  options: options[];
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxGroupComponent({
  gridTemplateRows = 'auto',
  gridTemplateColumns = 'auto',
  gap = '8px',
  alignContent = 'start',
  justifyContent = 'start',
  width,
  onChange,
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupFieldset width={width}>
      <CheckboxGroupLegend>Select your options</CheckboxGroupLegend>
      <CheckboxGroupWrapper
        gridTemplateRows={gridTemplateRows}
        gridTemplateColumns={gridTemplateColumns}
        gap={gap}
        alignContent={alignContent}
        justifyContent={justifyContent}
      >
        {data.map((item) => (
          <CheckboxGroup key={item.id}>
            {item.options.map((option) => (
              <CheckboxComponent
                id={option.id}
                key={option.id}
                value={option.label}
                onChange={onChange}
              />
            ))}
          </CheckboxGroup>
        ))}
      </CheckboxGroupWrapper>
    </CheckboxGroupFieldset>
  );
}
