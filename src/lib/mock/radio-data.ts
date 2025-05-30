type RadioOptions = {
  id: string;
  label?: string; // Optional label for the radio button
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RadioData = {
  id: string;
  label?: string; // Optional label for the radio button
  options: RadioOptions[];
};

export const radioData1: RadioData[] = [
  {
    id: 'radio1',
    label: 'Radio Group 1',
    options: [
      {
        id: 'option1',
        label: 'Option 1',
        name: 'example',
        value: 'option1',
        checked: false,
        disabled: false,
      },
    ],
  },
];

export const radioData2: RadioData[] = [
  {
    id: 'radio2',
    label: 'Radio Group 2',
    options: [
      {
        id: 'option1',
        label: 'Option 1',
        name: 'example',
        value: 'option1',
        checked: false,
        disabled: false,
      },
      {
        id: 'option2',
        label: 'Option 2',
        name: 'example',
        value: 'option2',
        checked: true,
        disabled: false,
      },
    ],
  },
];

export const radioData3: RadioData[] = [
  {
    id: 'radio3',
    label: 'Radio Group 3',
    options: [
      {
        id: 'radio1',
        label: 'Option 1',
        name: 'example',
        value: 'option1',
        checked: false,
        disabled: false,
      },
      {
        id: 'radio2',
        label: 'Option 2',
        name: 'example',
        value: 'option2',
        checked: true,
        disabled: false,
      },
      {
        id: 'radio3',
        label: 'Option 3',
        name: 'example',
        value: 'option3',
        checked: false,
        disabled: true,
      },
    ],
  },
];
