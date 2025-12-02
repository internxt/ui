import { Button } from '@/components/button';
import { TransparentModal } from '@/components/modalTransparent';
import { useArgs } from 'storybook/preview-api';
import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';

const onCloseDecorator: Decorator = (Story, context) => {
  const [{ isOpen }, setArgs] = useArgs();
  return (
    <div className="p-5">
      <Button onClick={() => setArgs({ isOpen: true })} className="mb-4">
        Open Transparent Modal
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
const baseModalStyles = {
  className: ['min-w-[150px]', 'space-y-4', 'rounded-[20px]', 'p-7', 'bg-black/50', 'border border-white/15'].join(' '),
};

const meta: Meta<typeof TransparentModal> = {
  title: 'Components/TransparentModal',
  component: TransparentModal,
  decorators: [onCloseDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A transparent modal component with blur effect and modern glass design.',
      },
    },
  },
  args: {
    disableBackdrop: false,
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
    },
    disableBackdrop: {
      control: 'boolean',
      description: 'Deactivates the backdrop',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TransparentModal>;

export const Default: Story = {
  args: {
    isOpen: false,
    className: baseModalStyles.className,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default transparent modal with Figma specifications.',
      },
    },
  },
  render: (args) => (
    <TransparentModal {...args}>
      <div className="flex flex-col h-full text-white justify-between">
        <h2 className="text-xl font-semibold">Modal Title</h2>
        <Button onClick={args.onClose} className="w-full bg-white/10 hover:bg-white/20 transition-colors">
          Close Modal
        </Button>
      </div>
    </TransparentModal>
  ),
};

export const WithForm: Story = {
  args: {
    isOpen: false,
    className: 'p-4',
  },
  parameters: {
    docs: {
      description: {
        story: 'Form example with Figma styling specifications.',
      },
    },
  },
  render: (args) => (
    <TransparentModal {...args}>
      <div className="flex flex-col h-full text-white space-y-7">
        <h2 className="text-xl font-semibold">Sign In</h2>
        <div className="flex-1 space-y-7">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"
          />
        </div>
        <Button onClick={args.onClose} className="w-full bg-white/10 hover:bg-white/20 transition-colors">
          Sign In
        </Button>
      </div>
    </TransparentModal>
  ),
};

const meetModalStyles = {
  className: ['h-[540px]', 'rounded-[20px]', 'p-7', 'bg-black/50', 'border border-white/15'].join(' '),
};
export const MeetingJoin: Story = {
  args: {
    isOpen: false,
    className: meetModalStyles.className,
  },
  parameters: {
    docs: {
      description: {
        story: 'Meeting join example following Figma specs.',
      },
    },
  },
  render: (args) => (
    <TransparentModal {...args}>
      <div className="flex flex-col h-full text-white space-y-4">
        <h2 className="text-xl font-semibold">Join Meeting</h2>
        <div className="flex-1 mt-7 space-y-7">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 rounded-lg bg-white/10 border border-white/15 focus:outline-none focus:border-white/30"
          />
        </div>
        <Button onClick={args.onClose} variant="primary">
          Join Meeting
        </Button>
      </div>
    </TransparentModal>
  ),
};
