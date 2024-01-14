import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { Tray } from '../../../../components/mail/tray/Tray';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '300px', maxWidth: '400px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Tray> = {
  title: 'Components(Email)/Tray',
  component: Tray,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [overlay],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center items-center w-full">
      <Tray {...args} />
    </div>
  ),
};
