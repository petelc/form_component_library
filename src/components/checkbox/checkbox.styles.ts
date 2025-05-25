import styled from '@emotion/styled';

type CheckboxProps = {
  width?: string;
};

export const Checkbox = styled.input<CheckboxProps>(
  {
    type: 'checkbox',
    width: '16px',
    height: '16px',
    marginRight: '8px',
    outline: '1px solid black',
    cursor: 'pointer',
    display: 'inline-block',
    verticalAlign: 'middle',
    accentColor: 'green',
  },
  (props) => ({
    width: props.width || '16px',
  })
);
