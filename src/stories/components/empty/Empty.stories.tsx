import { Meta, StoryObj } from '@storybook/react';
import { Upload } from '@phosphor-icons/react';
import { Empty } from '@/components/empty';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  argTypes: {
    action: {
      control: 'object',
      description: 'Action button configuration',
    },
    contextMenuClick: {
      action: 'contextMenuClick',
      description: 'Handles right-click interactions',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {
    icon: <Upload size={48} />,
    title: 'No Items Available',
    subtitle: 'Please add some items to get started.',
  },
};

export const WithAction: Story = {
  args: {
    icon: <Upload size={48} />,
    title: 'Upload New Files',
    subtitle: 'Drag and drop files here or use the button below.',
    action: {
      text: 'Upload Files',
      icon: Upload,
      style: 'elevated',
      onClick: () => alert('Uploading files...'),
    },
  },
};
