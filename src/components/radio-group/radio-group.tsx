import RadioComponent from '../radio/radio';

import {
  RadioGroup,
  RadioGroupFieldset,
  RadioGroupLegend,
  RadioGroupWrapper,
} from './radio-group.styles';

import type { RadioGroupProps } from './radio-group.styles';

const RadioGroupComponent = ({
  gridTemplateRows = 'auto',
  gridTemplateColumns = 'auto',
  gap = '8px',
  alignContent = 'start',
  justifyContent = 'start',
  width,
  source = [],
  onChange,
}: RadioGroupProps) => {
  return (
    <RadioGroupFieldset width={width}>
      <RadioGroupLegend>Select an option:</RadioGroupLegend>

      <RadioGroupWrapper
        gridTemplateRows={gridTemplateRows}
        gridTemplateColumns={gridTemplateColumns}
        gap={gap}
        alignContent={alignContent}
        justifyContent={justifyContent}
      >
        {source.map((item) => (
          <RadioGroup key={item.id}>
            {item.options.map((option) => (
              <RadioComponent
                key={option.id}
                id={option.id}
                name={option.name}
                value={option.value}
                checked={option.checked}
                disabled={option.disabled}
                onChange={onChange}
              />
            ))}
          </RadioGroup>
        ))}
      </RadioGroupWrapper>
    </RadioGroupFieldset>
  );
};

export default RadioGroupComponent;
