import CheckboxComponent from '../checkbox/checkbox';

import {
  CheckboxGroupWrapper,
  CheckboxGroup,
  CheckboxGroupLegend,
  CheckboxGroupFieldset,
} from './checkbox_group.styles';

type checkboxData = {
  id: string;
  label: string;
  options: options[];
};

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
  source?: checkboxData[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxGroupComponent({
  gridTemplateRows = 'auto',
  gridTemplateColumns = 'auto',
  gap = '8px',
  alignContent = 'start',
  justifyContent = 'start',
  width,
  source = [],
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
        {source.map((item) => (
          <CheckboxGroup key={item.id}>
            {item.options.map((option) => (
              <CheckboxComponent
                id={option.id}
                key={option.id}
                checked={option.checked}
                disabled={option.disabled}
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
