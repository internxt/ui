import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from '@/components/popover';
import { Button } from '@/components/button';
import { UserCircle } from '@phosphor-icons/react';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  childrenButton: (
    <button className="text-gray-800 p-2 rounded-full border border-gray-300">
      <UserCircle size={24} className="text-gray-800 dark:text-white" />
    </button>
  ),
  panel: (closePopover: () => void) => (
    <div className="p-4 text-sm">
      <p className="mb-2">This is the popover content.</p>
      <Button onClick={closePopover} className="mt-2 text-blue-500 hover:text-blue-700">
        Close
      </Button>
    </div>
  ),
  className: '',
  classButton: '',
};

export const PopoverExample: Story = {
  args: {
    ...defaultArgs,
  },
};
