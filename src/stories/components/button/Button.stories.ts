import { Button } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button',
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: '#1E293B' }],
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [{ name: 'blue', value: '#1E293B' }],
    },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    loading: true,
  },
};
