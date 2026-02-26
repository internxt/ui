import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageCheapSkeleton } from '../../../../../components/mail/tray/MessageCheapSkeleton';

const meta: Meta<typeof MessageCheapSkeleton> = {
  title: 'Mail/MessageCheapSkeleton',
  component: MessageCheapSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const Default: Story = {};

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col w-[400px]">
      {new Array(5).fill(0).map((_, index) => (
        <MessageCheapSkeleton key={index} />
      ))}
    </div>
  ),
};
