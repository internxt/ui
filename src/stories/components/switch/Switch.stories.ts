import type { Meta, StoryObj } from '@storybook/react';
import { SwitchComponent } from '../../../components/switch/Switch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
