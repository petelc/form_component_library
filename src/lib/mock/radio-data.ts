type RadioData = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
};

export const radioData1: RadioData[] = [
  {
    id: 'radio1',
    name: 'example',
    value: 'option1',
    checked: false,
    disabled: false,
  },
];

export const radioData2: RadioData[] = [
  {
    id: 'radio1',
    name: 'example',
    value: 'option1',
    checked: false,
    disabled: false,
  },
  {
    id: 'radio2',
    name: 'example',
    value: 'option2',
    checked: true,
    disabled: false,
  },
];

export const radioData3: RadioData[] = [
  {
    id: 'radio1',
    name: 'example',
    value: 'option1',
    checked: false,
    disabled: false,
  },
  {
    id: 'radio2',
    name: 'example',
    value: 'option2',
    checked: true,
    disabled: false,
  },
  {
    id: 'radio3',
    name: 'example',
    value: 'option3',
    checked: false,
    disabled: true,
  },
];
