import CheckboxComponent from './checkbox';

export default {
  component: CheckboxComponent,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 'default-checkbox',
    checked: false,
    disabled: false,
    value: 'default',
    width: '16px',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.checked);
    },
  },
};

//  id: string;
//   checked?: boolean;
//   disabled?: boolean;
//   value?: string;
//   width?: string;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
