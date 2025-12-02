import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown, DropdownProps } from '@/components/dropdown';
import { DotsThree } from '@phosphor-icons/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: DropdownProps<unknown> = {
  children: <DotsThree size={24} className="text-gray-800 dark:text-white" weight="bold" />,
  classMenuItems: 'mt-1 w-max rounded-md border border-gray-10 bg-surface dark:bg-gray-5 py-1.5',
  options: [
    { text: 'Option 1', onClick: () => alert('Option 1 selected') },
    { text: 'Option 2', onClick: () => alert('Option 2 selected') },
  ],
  menuItems: [
    <div onClick={() => alert('Item 1 selected')}>{'Item 1'}</div>,
    <div onClick={() => alert('Item 2 selected')}>{'Item 2'}</div>,
  ],
  dropdownActionsContext: [
    {
      name: 'Action 1',
      action: () => {
        alert('Launched action 1');
      },
    },
    { name: 'Action 2', action: () => alert('Launched action 2') },
    { separator: true },
    { name: 'Action 3', action: () => alert('Launched action 3') },
  ],
  openDirection: 'left',
};

export const RightAlign: Story = {
  args: {
    ...defaultArgs,
    openDirection: 'right',
  },
};

export const LeftAlign: Story = {
  args: {
    ...defaultArgs,
    openDirection: 'left',
  },
};
