import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Checkbox } from '../../../components/checkbox/Checkbox';

const onClick: Decorator = (Story, context) => {
  const [{ checked }, setArgs] = useArgs();

  return Story({
    ...context,
    args: {
      ...context.allArgs,
      onClick: () => setArgs({ ...context.args, checked: !checked }),
    },
  });
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  decorators: [onClick],
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
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
