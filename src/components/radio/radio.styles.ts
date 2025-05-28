import styled from '@emotion/styled';

type RadioProps = {
  width?: string;
};

export const RadioContainer = styled.label<RadioProps>`
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  line-height: 1;
  display: grid;
  grid-template-columns: 1.2rem auto;
  gap: 0.5rem;
  align-items: center;
`;

export const Radio = styled.input<RadioProps>`
  width: 1.1rem;
  height: 1.1rem;
  background-color: #e8e8e8;
  border: 0.2rem solid #fff;
  border-radius: 50%;
  transition: 120ms transform ease-in-out;
  accent-color: #ff5722;
  &:checked::before {
    transform: scale(1);
  }
`;
