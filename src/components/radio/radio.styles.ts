import styled from '@emotion/styled';

type RadioProps = {
  width?: string;
};

export const RadioContainer = styled.div<RadioProps>`
  font-family: system-ui, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;

export const Radio = styled.input<RadioProps>`
  width: 0.65em;
  height: 0.65em;
  background-color: antiquewhite;
  border: 1px solid black;
  border-radius: 50%;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em green;
  accent-color: green;

  &:checked::before {
    transform: scale(1);
  }
`;
