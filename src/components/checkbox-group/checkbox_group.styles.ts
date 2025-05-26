import styled from '@emotion/styled';
// import { CheckboxProps } from '../checkbox/checkbox.styles';

type GroupProps = {
  gridTemplateRows: string;
  gridTemplateColumns: string;
  gap: string;
  alignContent: string;
  justifyContent: string;
  width?: string;
};

type FieldsetProps = {
  width?: string;
};

export const CheckboxGroupFieldset = styled.fieldset<FieldsetProps>(
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

export const CheckboxGroupLegend = styled.legend({
  padding: '10px',
  backgroundColor: '#f9f9f9',
  color: '#333',
});

export const CheckboxGroup = styled.div({
  padding: '8px',
});

export const CheckboxGroupWrapper = styled.div<GroupProps>(
  {
    display: 'grid',
  },
  (props) => ({
    gridTemplateRows: props.gridTemplateRows || 'auto',
    gridTemplateColumns: '1fr 1fr 1fr', // Default to three columns
    gridGap: props.gap || '8px',
    alignContent: props.alignContent || 'start',
    justifyContent: props.justifyContent || 'start',
    width: props.width || '100%',
  })
);
