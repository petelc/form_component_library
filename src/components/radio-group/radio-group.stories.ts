import type { Meta, StoryObj } from '@storybook/react';

import RadioGroupComponent from './radio-group';
import { radioData1, radioData2, radioData3 } from '../../lib/mock/radio-data';

/**
 * RadioGroup stories
 * This file contains stories for the RadioGroup component, showcasing different configurations such as default layout and three-button layout.
 */
const meta: Meta<typeof RadioGroupComponent> = {
  title: 'Components/RadioGroup',
  component: RadioGroupComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Radio Group component for displaying a group of radio buttons. It supports various props like grid layout, options, and onChange event handling.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroupComponent>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        component:
          'Radio Group component for displaying a group of radio buttons. It supports various props like grid layout, options, and onChange event handling.',
      },
    },
  },
  args: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'space-between',
    // width: '400px',
    source: radioData1,
  },
};

export const TwoButtonLayout: Story = {
  args: {
    gridTemplateRows: 'repeat(1, auto)',
    //gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'space-between',
    // width: '400px',
    source: radioData2,
  },
};

export const ThreeButtonLayout: Story = {
  args: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'space-between',
    // width: '400px',
    source: radioData3,
  },
};

export const Disabled: Story = {
  args: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'space-between',
    // width: '400px',
    source: radioData3.map((group) => ({
      ...group,
      options: group.options.map((option) => ({
        ...option,
        disabled: true, // Disable all options in the group
      })),
    })),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the RadioGroup component with all radio buttons disabled.',
      },
    },
  },
};
