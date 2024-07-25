import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { NewMailDialog } from '../../../../components/mail/newMailDialog/NewMailDialog';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '600px', maxWidth: '344px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof NewMailDialog> = {
  title: 'Components(Email)/NewMailDialog',
  component: NewMailDialog,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [overlay],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'New message',
  },
  render: (args) => (
    <div className="flex w-full">
      <NewMailDialog {...args} />
    </div>
  ),
};
