import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { UsageWarningBanner } from '@/components/feedback/notifications/usageBanner';

const meta: Meta<typeof UsageWarningBanner> = {
  title: 'Feedback/Banner',
  component: UsageWarningBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
  args: {
    onUpgradeClick: fn(),
    onCloseButtonClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usage: '600MB',
    limit: '1GB',
    percentage: 60,
    titleLabel: 'Get more space for your files',
    descriptionLabelLine1: 'Unlock additional storage with an exclusive 85% discount on your upgrade',
    descriptionLabelLine2: 'Access advanced features like file version history, Rclone, NAS support, premium support, and more',
    upgradeLabel: 'Get offer',
    isLoading: false,
  },
};

export const LowUsage: Story = {
  args: {
    ...Default.args,
    usage: '800MB',
    limit: '1GB',
    percentage: 80,
    titleLabel: 'Your storage is filling up',
    descriptionLabelLine1: 'Upgrade today with an exclusive 85% discount and keep uploading without interruptions',
    descriptionLabelLine2: 'Get more storage plus advanced features like file version history, NAS support, Rclone integration, and premium support',
  },
};

export const AlmostFull: Story = {
  args: {
    ...Default.args,
    usage: '950MB',
    limit: '1GB',
    percentage: 95,
    titleLabel: 'Your storage is almost full',
    descriptionLabelLine1: 'You may soon be unable to upload new files',
    descriptionLabelLine2: 'Upgrade now with an exclusive 85% discount to continue storing and syncing your files without limits'
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};