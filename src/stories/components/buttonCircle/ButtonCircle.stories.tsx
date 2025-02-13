import { CircleButton } from '@/components/buttonCircle';
import { Camera, ExclamationMark, Microphone, User, X } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/CircleButton',
  component: CircleButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1E293B' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const ExampleDropdown = () => (
  <div className="min-w-[240px] bg-gray-800/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-4">
    <div className="text-white">Dropdown content</div>
  </div>
);

export const Default: Story = {
  args: {
    children: <Camera size={20} color="white" weight="bold" />,
    variant: 'default',
    active: false,
    onClick: () => console.log('clicked'),
    dropdown: <ExampleDropdown />,
  },
};

export const Active: Story = {
  args: {
    children: <Camera size={20} color="white" weight="bold" />,
    variant: 'default',
    active: true,
    onClick: () => console.log('clicked'),
    dropdown: <ExampleDropdown />,
  },
};

export const WithWarning: Story = {
  args: {
    children: <Camera size={20} color="white" weight="bold" />,
    variant: 'warning',
    onClick: () => console.log('clicked'),
  },
};

export const WithCustomIndicator: Story = {
  args: {
    children: <Camera size={20} color="white" weight="bold" />,
    variant: 'default',
    onClick: () => console.log('clicked'),
    indicator: {
      icon: <ExclamationMark size={12} color="white" weight="bold" />,
      className: 'bg-orange',
    },
  },
};

export const CancelButton: Story = {
  args: {
    children: <X size={20} color="white" weight="bold" />,
    variant: 'cancel',
    onClick: () => console.log('clicked'),
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex space-x-2">
      <CircleButton
        variant="default"
        active={false}
        onClick={() => console.log('video clicked')}
        dropdown={<ExampleDropdown />}
      >
        <Camera size={20} color="white" weight="bold" />
      </CircleButton>
      <CircleButton
        variant="default"
        active={false}
        onClick={() => console.log('audio clicked')}
        dropdown={<ExampleDropdown />}
      >
        <Microphone size={20} color="white" weight="bold" />
      </CircleButton>
      <CircleButton variant="default" active={false} onClick={() => console.log('user clicked')}>
        <User size={20} color="white" weight="bold" />
      </CircleButton>
      <CircleButton variant="cancel" onClick={() => console.log('close clicked')}>
        <X size={20} color="white" weight="bold" />
      </CircleButton>
    </div>
  ),
};
