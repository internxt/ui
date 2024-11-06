import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Modal from '../../../components/modal/Modal';
import { Button } from '../../../components';

const onCloseDecorator: Decorator = (Story, context) => {
  const [{ isOpen }, setArgs] = useArgs();

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => setArgs({ isOpen: true })} className="mb-4 bg-blue-600 text-white rounded px-4 py-2">
        Show modal
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

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  decorators: [onCloseDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    maxWidth: { control: 'text' },
    width: { control: 'text' },
    className: { control: 'text' },
    preventClosing: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalExample: Story = {
  args: {
    isOpen: false,
    maxWidth: 'max-w-sm',
    width: 'w-full',
    className: 'p-5',
    preventClosing: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Un modal con configuraciones predeterminadas y estilo general.',
      },
    },
  },
  render: (args) => (
    <Modal {...args}>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Title</h2>
        <p className="mt-2">This is an example.</p>

        <Button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={args.onClose}>
          Close
        </Button>
      </div>
    </Modal>
  ),
};
