import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { Preview } from '../../../../components/mail/preview/Preview';
import { emailMocks } from '../../../../components/mail/mocks';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '600px', maxWidth: '800px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Preview> = {
  title: 'Components(Email)/Preview',
  component: Preview,
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
    <div className="flex">
      <Preview {...args} />
    </div>
  ),
};
