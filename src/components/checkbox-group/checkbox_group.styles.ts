import styled from '@emotion/styled';
// import { CheckboxProps } from '../checkbox/checkbox.styles';

type GroupProps = {
  rows: string;
  columns: string;
  gap: string;
  alignContent: string;
  justifyContent: string;
};

export const CheckboxGroup = styled.legend({
  padding: '10px',
  backgroundColor: '#f9f9f9',
  color: '#333',
});

export const CheckboxGroupWrapper = styled.section<GroupProps>(
  {
    width: '100%',
    display: 'grid',
  },
  (props) => ({
    gridTemplateRows: props.rows || 'auto',
    gridTemplateColumns: props.columns || '1fr',
    gridGap: props.gap || '8px',
    alignContent: props.alignContent || 'start',
    justifyContent: props.justifyContent || 'start',
  })
);
