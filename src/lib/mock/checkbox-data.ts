type options = {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  width?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type checkboxData = {
  id: string;
  label: string;
  options: options[];
};

export const data1: checkboxData[] = [
  {
    id: 'item1',
    label: 'Item 1',
    options: [{ id: 'item1', label: 'Item 1', checked: true, disabled: false }],
  },
];

export const data3: checkboxData[] = [
  {
    id: 'item1',
    label: 'Item 1',
    options: [
      { id: 'item1', label: 'Item 1', checked: false, disabled: false },
    ],
  },
  {
    id: 'item2',
    label: 'Item 2',
    options: [{ id: 'item2', label: 'Item 2', checked: true, disabled: false }],
  },
  {
    id: 'item3',
    label: 'Item 3',
    options: [{ id: 'item3', label: 'Item 3', checked: false, disabled: true }],
  },
  {
    id: 'item4',
    label: 'Item 4',
    options: [
      { id: 'item4', label: 'Item 4', checked: false, disabled: false },
    ],
  },
  {
    id: 'item5',
    label: 'Item 5',
    options: [{ id: 'item5', label: 'Item 5', checked: true, disabled: false }],
  },
  {
    id: 'item6',
    label: 'Item 6',
    options: [
      { id: 'item6', label: 'Item 6', checked: false, disabled: false },
    ],
  },
];
