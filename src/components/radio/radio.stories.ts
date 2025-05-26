import RadioComponent from './radio';

export default {
  component: RadioComponent,
  title: 'Components/Radio',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    id: 'default-radio',
    name: 'example',
    value: 'option1',
    checked: false,
    disabled: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
  },
};
