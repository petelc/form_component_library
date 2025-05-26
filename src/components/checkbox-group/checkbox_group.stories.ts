import CheckboxGroupComponent from './checkbox_group';

export default {
  component: CheckboxGroupComponent,
  title: 'Components/CheckboxGroup',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    options: [
      { id: 'checkbox1', label: 'Checkbox 1' },
      { id: 'checkbox2', label: 'Checkbox 2' },
      { id: 'checkbox3', label: 'Checkbox 3' },
    ],
  },
};

export const ThreeButtonLayout = {
  args: {
    //gridTemplateRows: 'repeat(1, auto)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '400px',
    options: [
      { id: 'checkbox1', label: 'Checkbox 1' },
      { id: 'checkbox2', label: 'Checkbox 2', checked: true },
      { id: 'checkbox3', label: 'Checkbox 3', disabled: true },
      { id: 'checkbox4', label: 'Checkbox 4' },
      { id: 'checkbox5', label: 'Checkbox 5' },
      { id: 'checkbox6', label: 'Checkbox 6' },
    ],
  },
};
