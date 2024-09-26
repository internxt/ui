import type { Meta, StoryObj } from '@storybook/react';
import { SwitchComponent } from '../../../components/switch/Switch';

const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    disabled: false,
    size: 'md',
  },
};
export const Large: Story = {
  args: {
    disabled: false,
    size: 'lg',
  },
};
export const ExtraLarge: Story = {
  args: {
    disabled: false,
    size: 'xl',
  },
};
