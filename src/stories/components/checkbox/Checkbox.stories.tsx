import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // onClick: {action: "clicked"}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    asChild: false,
    defaultChecked: true,
    checked: true,
    disabled: false,
    required: false,
    name: '',
    value: '',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {},
};

export const CheckedAndDisabled: Story = {
  args: {
    defaultChecked: true,
    checked: true,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    defaultChecked: 'indeterminate',
    checked: 'indeterminate',
  },
};

export const IndeterminateAndDisabled: Story = {
  args: {
    defaultChecked: 'indeterminate',
    checked: 'indeterminate',
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: false,
    checked: false,
    disabled: true,
  },
};

export const Enabled: Story = {
  args: {
    defaultChecked: false,
    checked: false,
  },
};
