import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import Input from '../../../components/input/Input';

const onChange: Decorator = (Story, context) => {
  const [localValue, setLocalValue] = useState(context.args.value);

  const handleChange = (newValue: string) => {
    if (localValue !== newValue) {
      setLocalValue(newValue);
      context.updateArgs?.({ value: newValue });
    }
  };

  return Story({
    ...context,
    args: {
      ...context.args,
      value: localValue,
      onChange: handleChange,
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

export const Text: Story = {
  args: {
    label: 'Text Input',
    variant: 'default',
    value: '',
    placeholder: 'Type something...',
    maxLength: 20,
  },
};

export const Search: Story = {
  args: {
    label: 'Search Input',
    variant: 'search',
    value: '',
    placeholder: 'Search...',
  },
};

export const Password: Story = {
  args: {
    label: 'Password Input',
    variant: 'password',
    value: '',
    placeholder: 'Enter password...',
  },
};

export const SuccessMessage: Story = {
  args: {
    label: 'Input with Success Message',
    variant: 'default',
    value: '',
    message: 'Your input is correct!',
    accent: 'success',
  },
};

export const ErrorMessage: Story = {
  args: {
    label: 'Input with Error Message',
    variant: 'default',
    value: '',
    message: 'There was an error!',
    accent: 'error',
  },
};

export const WarningMessage: Story = {
  args: {
    label: 'Input with Warning Message',
    variant: 'default',
    value: '',
    message: 'This is a warning!',
    accent: 'warning',
  },
};
