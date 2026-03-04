import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { emailMocks } from '../../../../components/mail/mocks';
import { UserCheap } from '../../../../components/mail/userCheap/UserCheap';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '600px', maxWidth: '344px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof UserCheap> = {
  title: 'Components(Email)/UserCheap',
  component: UserCheap,
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
    to: emailMocks.emailsWithMultipleRecipients[0].to,
  },
  render: (args) => (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-1">
      <UserCheap {...args} />
    </div>
  ),
};
