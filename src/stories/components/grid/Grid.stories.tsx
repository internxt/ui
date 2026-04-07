import { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from '@/components/layout/grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom CSS classes for the Grid container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-lg bg-gray-10 p-6 text-sm font-medium text-gray-80 shadow-sm"
        >
          Grid Item {index + 1}
        </div>
      ))}
    </Grid>
  ),
};
