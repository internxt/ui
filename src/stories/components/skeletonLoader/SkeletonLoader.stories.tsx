import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoader } from '@/components/skeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Components/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const skeletonData = new Array(5).fill(0).map((_row, index) => ({
  skeletonItem: [
    <div key={`skin-skeleton-1-${index}`} className="mr-3 flex w-full flex-row items-center space-x-4">
      <div className="h-8 w-8 rounded-md bg-gray-5" />
      <div className="h-4 w-full rounded bg-gray-5" />
    </div>,
    <div key={`skin-skeleton-2-${index}`} className="h-4 w-64 rounded bg-gray-5" />,
    <div key={`skin-skeleton-3-${index}`} className="ml-3 h-4 w-24 rounded bg-gray-5" />,
  ],
  columns: ['flex grow items-center min-w-driveNameHeader', 'w-date', 'w-size'],
}));

export const ListLayout: Story = {
  args: {
    skeleton: skeletonData,
  },
  render: (args) => <SkeletonLoader {...args} />,
};
