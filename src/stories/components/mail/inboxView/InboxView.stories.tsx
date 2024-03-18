import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { emailMocks } from '../../../../components/mail/mocks';
import { MailView } from '../../../../components/mail/mailView/MailView';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '600px', minWidth: '800px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof MailView> = {
  title: 'Components(Email)/MailView',
  component: MailView,
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
    <div className="flex w-screen">
      <MailView {...args} />
    </div>
  ),
};
