import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { TextArea } from '@/components/textArea';

const onChange: Decorator = (Story, context) => {
  const [, setArgs] = useArgs();

  return Story({
    ...context,
    args: {
      ...context.allArgs,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setArgs({ ...context.args, value: e.target.value }),
    },
  });
};

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
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

export const AccentColorDefault: Story = {};

export const AccentColorRed: Story = {
  args: {
    accentColor: 'red',
  },
};
