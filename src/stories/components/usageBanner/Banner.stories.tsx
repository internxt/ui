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
    closeButtonLabel: 'Close',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    usage: '600MB',
    limit: '1GB',
    percentage: 60,
    barClassName: 'bg-yellow-60',
    title: 'Get more space for your files',
    description: (
      <>
        <p>
          Unlock additional storage with an exclusive <strong>85% discount</strong> on your upgrade
        </p>
        <p>Access advanced features like file version history, Rclone, NAS support, premium support, and more</p>
      </>
    ),
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
    barClassName: 'bg-orange-60',
    title: 'Your storage is filling up',
    description: (
      <>
        <p>
          Upgrade today with an exclusive <strong>85% discount</strong> and keep uploading without interruptions
        </p>
        <p>
          Get more storage plus advanced features like file version history, NAS support, Rclone integration, and
          premium support
        </p>
      </>
    ),
  },
};

export const AlmostFull: Story = {
  args: {
    ...Default.args,
    usage: '950MB',
    limit: '1GB',
    percentage: 95,
    barClassName: 'bg-danger',
    title: 'Your storage is almost full',
    description: (
      <>
        <p>You may soon be unable to upload new files</p>
        <p>
          Upgrade now with an exclusive <strong>85% discount</strong> to continue storing and syncing your files
          without limits
        </p>
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
