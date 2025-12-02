import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { Dialog } from '@/components/dialog';
import { Button } from '@/components/button';

const onCloseDecorator: Decorator = (Story, context) => {
  const [{ isOpen }, setArgs] = useArgs();

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => setArgs({ isOpen: true })} className="mb-4 bg-blue-600 text-white rounded px-4 py-2">
        Show dialog
      </Button>
      {Story({
        ...context,
        args: {
          ...context.allArgs,
          isOpen,
          onClose: () => setArgs({ isOpen: false }),
        },
      })}
    </div>
  );
};

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [onCloseDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    primaryAction: { control: 'text' },
    secondaryAction: { control: 'text' },
    primaryActionColor: { control: 'select', options: ['primary', 'danger'] },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogExample: Story = {
  args: {
    isOpen: false,
    title: 'Dialog Title',
    subtitle: 'This is a subtitle for the dialog.',
    primaryAction: 'Confirm',
    secondaryAction: 'Cancel',
    primaryActionColor: 'primary',
    isLoading: false,
    onPrimaryAction: () => alert('Primary action executed!'),
    onSecondaryAction: () => alert('Secondary action executed!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'An example dialogue.',
      },
    },
  },
  render: (args: any) => <Dialog {...args} />,
};
