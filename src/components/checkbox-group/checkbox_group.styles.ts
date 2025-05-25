import styled from '@emotion/styled';
// import { CheckboxProps } from '../checkbox/checkbox.styles';

type GroupProps = {
  rows: string;
  columns: string;
  gap: string;
  alignContent: string;
  justifyContent: string;
};

export const CheckboxGroup = styled.div<GroupProps>(
  {
    display: 'grid',
    width: '100%',
  },
  (props) => ({
    gridTemplateRows: props.rows || 'auto',
    gridTemplateColumns: props.columns || '1fr',
    gap: props.gap || '8px',
    alignContent: props.alignContent || 'start',
    justifyContent: props.justifyContent || 'start',
  })
);
