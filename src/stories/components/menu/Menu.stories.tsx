import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Menu, MenuProps } from '@/components/menu';

const withCloseHandler: Decorator = (Story, context) => {
  const [, setArgs] = useArgs();

  return Story({
    ...context,
    args: {
      ...context.allArgs,
      handleMenuClose: () => setArgs({ ...context.args, isOpen: true }),
    },
  });
};

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  decorators: [withCloseHandler],
  tags: ['autodocs'],
  argTypes: {
    handleMenuClose: { action: 'closed' },
    genericEnterKey: { action: 'genericEnterKey' },
  },
};

export default meta;
type Story = StoryObj<MenuProps<unknown>>;

const ExampleIconCurrent = React.forwardRef<SVGSVGElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
  </svg>
));

const ExampleIconRed = React.forwardRef<SVGSVGElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="red">
    <circle cx="12" cy="12" r="10" />
  </svg>
));

const ExampleIconBlue = React.forwardRef<SVGSVGElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="blue">
    <circle cx="12" cy="12" r="10" />
  </svg>
));

const ExampleIconGreen = React.forwardRef<SVGSVGElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="green">
    <circle cx="12" cy="12" r="10" />
  </svg>
));

export const Default: Story = {
  args: {
    item: { id: 1, name: 'Sample Item' },
    isOpen: true,
    menu: [
      { name: 'Title', isTitle: () => true },
      { separator: true },
      { name: 'Option 1', action: () => alert('Option 1 selected') },
      { name: 'Option 2', disabled: () => true, action: () => alert('Option 2 selected') },
      { name: 'Option 3', disabled: () => false, action: () => alert('Option 3 selected') },
      {
        name: 'Option 4',
        action: () => alert('Option 4 selected'),
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    item: { id: 1, name: 'Sample Item' },
    isOpen: true,
    menu: [
      { name: 'Title', isTitle: () => true },
      { separator: true },
      { name: 'Option 1', action: () => alert('Option 1 selected'), icon: ExampleIconCurrent },
      { name: 'Option 2', disabled: () => true, action: () => alert('Option 2 selected'), icon: ExampleIconRed },
      { name: 'Option 3', disabled: () => false, action: () => alert('Option 3 selected'), icon: ExampleIconBlue },
      {
        name: 'Option 4',
        action: () => alert('Option 4 selected'),
        icon: ExampleIconGreen,
      },
    ],
  },
};
