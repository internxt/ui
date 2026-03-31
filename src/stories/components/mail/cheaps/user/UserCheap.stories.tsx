import type { Meta, StoryObj } from '@storybook/react-vite';
import UserCheap from '../../../../../components/mail/cheaps/user/UserCheap';

const meta: Meta<typeof UserCheap> = {
  title: 'Mail/User Cheap',
  component: UserCheap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fullName: {
      control: 'text',
      description: 'Full name of the user',
    },
    email: {
      control: 'text',
      description: 'Email address of the user',
    },
    avatar: {
      control: 'text',
      description: 'URL of the user avatar image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
  },
};

export const WithAvatar: Story = {
  args: {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
};

export const LongName: Story = {
  args: {
    fullName: 'Alexander Maximilian Richardson III',
    email: 'alexander.richardson@company.com',
  },
};

export const LongEmail: Story = {
  args: {
    fullName: 'John Doe',
    email: 'john.doe.very.long.email.address@subdomain.company.com',
  },
};
