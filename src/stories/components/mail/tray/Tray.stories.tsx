import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TrayList } from '../../../../components/mail/tray/TrayList';

const mockMails = [
  {
    id: '1',
    from: { name: 'John Doe', avatar: '' },
    subject: 'Meeting tomorrow',
    createdAt: '10:30 AM',
    body: 'Hi, just a reminder about our meeting tomorrow at 3pm.',
    read: false,
  },
  {
    id: '2',
    from: { name: 'Jane Smith', avatar: '' },
    subject: 'Project update',
    createdAt: '9:15 AM',
    body: 'The project is progressing well. Here are the latest updates...',
    read: true,
  },
  {
    id: '3',
    from: { name: 'Mike Johnson', avatar: '' },
    subject: 'Invoice #1234',
    createdAt: 'Yesterday',
    body: 'Please find attached the invoice for last month services.',
    read: true,
  },
  {
    id: '4',
    from: { name: 'Sarah Wilson', avatar: '' },
    subject: 'Welcome to the team!',
    createdAt: 'Yesterday',
    body: 'We are excited to have you on board. Let me know if you need anything.',
    read: false,
  },
  {
    id: '5',
    from: { name: 'Tech Support', avatar: '' },
    subject: 'Your ticket has been resolved',
    createdAt: 'Feb 20',
    body: 'Your support ticket #5678 has been resolved. Please let us know if you have any questions.',
    read: true,
  },
];

const meta: Meta<typeof TrayList> = {
  title: 'Mail/Tray List',
  component: TrayList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Shows skeleton loaders when true',
    },
    checked: {
      control: 'boolean',
      description: 'Select all checkbox state',
    },
    activeEmail: {
      control: 'text',
      description: 'ID of the currently active email',
    },
    hasMoreItems: {
      control: 'boolean',
      description: 'Whether there are more items to load',
    },
  },
  args: {
    onMailSelected: fn(),
    onLoadMore: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false,
  },
};

export const WithActiveEmail: Story = {
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '2',
    hasMoreItems: false,
  },
};

export const WithSelectedEmails: Story = {
  args: {
    mails: mockMails,
    selectedEmails: ['1', '3', '5'],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false,
  },
};

export const AllSelected: Story = {
  args: {
    mails: mockMails,
    selectedEmails: ['1', '3', '5'],
    loading: false,
    checked: true,
    activeEmail: '',
    hasMoreItems: false,
  },
};

export const WithInfiniteScroll: Story = {
  args: {
    mails: mockMails,
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: true,
  },
};

export const Loading: Story = {
  args: {
    mails: [],
    selectedEmails: [],
    loading: true,
    checked: false,
    activeEmail: '',
    hasMoreItems: false,
  },
};

export const Empty: Story = {
  args: {
    mails: [],
    selectedEmails: [],
    loading: false,
    checked: false,
    activeEmail: '',
    hasMoreItems: false,
  },
};
