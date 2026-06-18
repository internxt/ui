import type { Meta, StoryObj } from '@storybook/react-vite';
import { SidenavStorage, SidenavStorageProps } from '@/components/sidenav';

const meta: Meta<typeof SidenavStorage> = {
  title: 'Navigation/SidenavStorage',
  component: SidenavStorage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percentage: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    onUpgradeClick: { action: 'upgradeClick' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SidenavStorageProps>;

export const Default: Story = {
  args: {
    usage: '2.8 GB',
    limit: '4 GB',
    percentage: 70,
    upgradeLabel: 'Upgrade',
    isLoading: false,
    onUpgradeClick: () => console.log('Upgrade clicked'),
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const HighUsage: Story = {
  args: {
    ...Default.args,
    usage: '9.5 GB',
    limit: '10 GB',
    percentage: 95,
    upgradeLabel: 'Upgrade now',
  },
};

export const LowUsage: Story = {
  args: {
    ...Default.args,
    usage: '500 MB',
    limit: '4 GB',
    percentage: 12,
  },
};

export const Full: Story = {
  args: {
    ...Default.args,
    usage: '10 GB',
    limit: '10 GB',
    percentage: 100,
  },
};

export const WithoutUpgradeButton: Story = {
  args: {
    ...Default.args,
    upgradeLabel: undefined,
  },
};
