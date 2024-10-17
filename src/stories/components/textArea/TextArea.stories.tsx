import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '../../../components/textArea/TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccentColorDefault: Story = {};

export const AccentColorRed: Story = {
  args: {
    accentColor: 'red',
  },
};
