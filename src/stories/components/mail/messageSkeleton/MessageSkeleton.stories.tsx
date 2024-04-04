import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { emailMocks } from '../../../../components/mail/mocks';
import { MessageSkeleton } from '../../../../components/mail/tray/components/MessageSkeleton';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '600px', maxWidth: '344px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof MessageSkeleton> = {
  title: 'Components(Email)/MessageSkeleton',
  component: MessageSkeleton,
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
    email: emailMocks.emailsWithMultipleRecipients[0],
  },
  render: (args) => (
    <div className="flex w-full">
      <MessageSkeleton {...args} />
    </div>
  ),
};
