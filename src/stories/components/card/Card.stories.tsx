import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@/components/card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-semibold">Default Card</h3>
        <p className="text-gray-700">This is a simple card.</p>
      </div>
    ),
    className: '',
  },
};

export const CustomStyledCard: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-semibold text-primary">Custom Card</h3>
        <p className="text-gray-500">This card has custom styles.</p>
      </div>
    ),
    className: 'bg-primary/10 border-primary/20',
  },
};
