import styled from '@emotion/styled';
import type { RadioData } from '../../lib/mock/radio-data';

export type RadioGroupProps = {
  gridTemplateRows: string;
  gridTemplateColumns: string;
  gap: string;
  alignContent: string;
  justifyContent: string;
  width?: string;
  source?: RadioData[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RadioGroupFieldsetProps = {
  width?: string;
};

export const RadioGroupFieldset = styled.fieldset<RadioGroupFieldsetProps>(
  {
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '0',
    padding: '5px',
  },
  (props) => ({
    width: props.width || '100%',
  })
);

export const RadioGroupLegend = styled.legend({
  padding: '10px',
  backgroundColor: '#f9f9f9',
  color: '#333',
});

export const RadioGroup = styled.div({
  padding: '8px',
});

export const RadioGroupWrapper = styled.div<RadioGroupProps>`
  display: grid;
  grid-template-rows: ${(props) => props.gridTemplateRows};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  gap: ${(props) => props.gap};
  align-content: ${(props) => props.alignContent};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
`;
