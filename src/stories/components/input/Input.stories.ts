import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Input from '../../../components/input/Input';

const onChange: Decorator = (Story, context) => {
  const [, setArgs] = useArgs();

  return Story({
    ...context,
    args: {
      ...context.allArgs,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setArgs({ ...context.args, value: e.target.value }),
    },
  });
};

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  decorators: [onChange],
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
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
