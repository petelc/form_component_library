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
];
