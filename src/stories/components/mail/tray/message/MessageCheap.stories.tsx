import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { MessageCheap } from '../../../../../components/mail/tray/MessageCheap';

const mockEmail = {
  id: '1',
  from: { name: 'John Doe', avatar: '' },
  subject: 'Meeting tomorrow',
  createdAt: '10:30 AM',
  body: 'Hi, just a reminder about our meeting tomorrow at 3pm.',
  read: false,
};

const meta: Meta<typeof MessageCheap> = {
  title: 'Mail/MessageCheap',
  component: MessageCheap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the message is currently selected/active',
    },
  },
  args: {
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: mockEmail,
    active: false,
  },
};

export const Active: Story = {
  args: {
    email: mockEmail,
    active: true,
  },
};

export const Read: Story = {
  args: {
    email: {
      ...mockEmail,
      read: true,
    },
    active: false,
  },
};

export const Unread: Story = {
  args: {
    email: {
      ...mockEmail,
      read: false,
    },
    active: false,
  },
};

export const LongContent: Story = {
  args: {
    email: {
      id: '2',
      from: { name: 'Alexander Maximilian Richardson III', avatar: '' },
      subject: 'Important: Project deadline extension request for Q4 deliverables',
      createdAt: 'Yesterday',
      body: 'This is a very long email body that should be truncated when it exceeds the available width of the container.',
      read: false,
    },
    active: false,
  },
};

export const WithAvatar: Story = {
  args: {
    email: {
      ...mockEmail,
      from: {
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
    },
    active: false,
  },
};
