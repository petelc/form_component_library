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

export const Checked = {
  args: {
    id: 'checked-radio',
    name: 'example',
    value: 'option2',
    checked: true,
    disabled: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
  },
};
export const Disabled = {
  args: {
    id: 'disabled-radio',
    name: 'example',
    value: 'option3',
    checked: false, // This is not checked, but the radio button is disabled
    disabled: true,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
  },
};

// export const MultipleRadios = {
//   args: {
//     radios: [
//       {
//         id: 'radio1',
//         name: 'example',
//         value: 'option1',
//         checked: false,
//         disabled: false,
//       },
//       {
//         id: 'radio2',
//         name: 'example',
//         value: 'option2',
//         checked: true,
//         disabled: false,
//       },
//       {
//         id: 'radio3',
//         name: 'example',
//         value: 'option3',
//         checked: false,
//         disabled: true,
//       },
//     ],
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
//       console.log(event.target.value);
//     },
//   },
// };

// export const MultipleRadiosWithCustomLabels = {
//   args: {
//     radios: [
//       {
//         id: 'radio1',
//         name: 'example',
//         value: 'option1',
//         checked: false,
//         disabled: false,
//         label: 'Option 1',
//       },
//       {
//         id: 'radio2',
//         name: 'example',
//         value: 'option2',
//         checked: true,
//         disabled: false,
//         label: 'Option 2',
//       },
//       {
//         id: 'radio3',
//         name: 'example',
//         value: 'option3',
//         checked: false,
//         disabled: true,
//         label: 'Option 3',
//       },
//     ],
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
//       console.log(event.target.value);
//     },
//   },
// };
