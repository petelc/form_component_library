import type { Meta, StoryObj } from '@storybook/react';
import InputComponent from './input';

/**
 * Input stories
 * This file contains stories for the Input component, showcasing different configurations such as default text input and number input.
 */
const meta: Meta<typeof InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Input component for text and number inputs. It supports various props like placeholder, type, value, width, maxlength, and disabled state.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        component:
          'Input component for text and number inputs. It supports various props like placeholder, type, value, width, maxlength, and disabled state.',
      },
    },
  },
  args: {
    id: 'default-input',
    placeholder: 'Type here...',
    type: 'text',
    value: '',
    width: '100%',
    maxlength: 800,
    disabled: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
  },
};

// export default {
//   component: InputComponent,
//   title: 'Components/Input',
//   tags: ['autodocs'],
// };

export const Default = {
  args: {
    id: 'default-input',
    placeholder: 'Type here...',
    type: 'text',
    value: '',
    width: '100%',
    maxlength: '100%',
    disabled: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
  },
};

export const NumberInput = {
  args: {
    id: 'number-input',
    placeholder: 'Enter a number',
    type: 'number',
    value: 0,
    width: '50px',
    maxlength: 10,
    disabled: false,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
    },
  },
};

// id: string;
//   placeholder?: string;
//   type?: string;
//   value?: string | number | string[];
//   maxlength?: number;
//   disabled?: boolean;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
