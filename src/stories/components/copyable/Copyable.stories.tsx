import { Meta, StoryObj } from '@storybook/react-vite';
import { Copyable } from '@/components/copyable';

const meta: Meta<typeof Copyable> = {
  title: 'Components/Copyable',
  component: Copyable,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Sample text to copy',
    copiedText: 'Copied!',
    copyToClipboardText: 'Copy to clipboard',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Copyable>;

export const Default: Story = {
  render: (args) => <Copyable {...args} />,
};

export const WithCustomClassName: Story = {
  args: {
    copiedText: 'Done!',
    copyToClipboardText: 'Copy text',
    classText: 'text-green',
  },
  render: (args) => <Copyable {...args} />,
};
