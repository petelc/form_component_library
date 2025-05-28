import type { Meta, StoryObj } from '@storybook/react';

import CheckboxGroupComponent from './checkbox_group';
import { data1, data3 } from '../../lib/mock/checkbox-data';

/**
 * CheckboxGroup stories
 * This file contains stories for the CheckboxGroup component, showcasing different configurations such as default layout and three-button layout.
 */
const meta: Meta<typeof CheckboxGroupComponent> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroupComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox Group component for displaying a group of checkboxes. It supports various props like grid layout, options, and onChange event handling.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxGroupComponent>;
// export default {
//   component: CheckboxGroupComponent,
//   title: 'Components/CheckboxGroup',
//   tags: ['autodocs'],
// };

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox Group component for displaying a group of checkboxes. It supports various props like grid layout, options, and onChange event handling.',
      },
    },
  },
  args: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '400px',
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
