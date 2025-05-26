import CheckboxGroupComponent from './checkbox_group';

const data1 = [
  {
    options: [{ id: 'item1', label: 'Item 1', checked: true, disabled: false }],
  },
];

const data3 = [
  {
    options: [{ id: 'item1', label: 'Item 1' }],
  },
  {
    options: [{ id: 'item2', label: 'Item 2', checked: true }],
  },
  {
    options: [{ id: 'item3', label: 'Item 3', disabled: true }],
  },
  {
    options: [{ id: 'item4', label: 'Item 4' }],
  },
  {
    options: [{ id: 'item5', label: 'Item 5', checked: true }],
  },
  {
    options: [{ id: 'item6', label: 'Item 6', disabled: false }],
  },
];

export default {
  component: CheckboxGroupComponent,
  title: 'Components/CheckboxGroup',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    source: data1,
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
    source: data3,
  },
};
