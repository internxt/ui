import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../components/checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {},
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    checked: true,
    indeterminate: true,
  },
};
