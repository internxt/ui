import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { Sidenav } from '../../../../components/mail/sidenav/Sidenav';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '300px', minWidth: '600px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Sidenav> = {
  title: 'Components(Email)/Sidenav',
  component: Sidenav,
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
    <div className="flex justify-center w-screen h-screen">
      <Sidenav {...args} />
    </div>
  ),
};
