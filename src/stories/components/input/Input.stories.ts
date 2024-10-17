import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../../components/input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLarge: Story = {
  args: {
    type: 'text',
    size: 'lg',
  },
};

export const TextMedium: Story = {
  args: {
    type: 'text',
    size: 'md',
  },
};

export const PasswordLarge: Story = {
  args: {
    type: 'password',
    size: 'lg',
  },
};

export const PasswordMedium: Story = {
  args: {
    type: 'password',
    size: 'md',
  },
};
