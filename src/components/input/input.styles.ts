import styled from '@emotion/styled';

type InputProps = {
  width?: string;
};

export const Input = styled.input<InputProps>(
  {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  (props) => ({
    width: props.width || '100%',
  })
);

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  label {
    font-size: 14px;
    color: #333;
  }
`;
