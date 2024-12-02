import type { Decorator, Meta, StoryObj } from '@storybook/react';
import BaseDialog, { BaseDialogProps } from '../../../components/baseDialog/BaseDialog';
import { Button } from '../../../components';

const overlay: Decorator = (Story) => (
  <div style={{ minHeight: '300px', minWidth: '600px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof BaseDialog> = {
  title: 'Components/BaseDialog',
  component: BaseDialog,
  parameters: {
    layout: 'centered',
  },
  decorators: [overlay],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: BaseDialogProps = {
  isOpen: true,
  title: 'Dialog Title',
  subTitle: 'Dialog Subtitle',
  children: (
    <div className="p-6 space-y-4">
      <div>Dialog content</div>
      <Button> Test button</Button>
    </div>
  ),
  onClose: () => alert('Dialog closed'),
  bgColor: 'bg-white',
  dialogRounded: true,
  weightIcon: 'bold',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    ...defaultArgs,
    hideCloseButton: true,
  },
};

export const CustomStyles: Story = {
  args: {
    ...defaultArgs,
    classes: 'p-6 shadow-lg',
    panelClasses: 'border border-red',
    titleClasses: 'font-semibold',
    closeClass: 'border border-red text-green hover:text-red',
  },
};
