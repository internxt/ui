import { useRef, useState } from 'react';
import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { ContextMenu } from '@/components/contextMenu';
import { MenuItemType } from '@/components/menu';
import { Button } from '@/components/button';

const Notification = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <div
    style={{
      padding: '10px',
      borderRadius: '5px',
    }}
  >
    {message}
    <Button onClick={onClose}>Clear</Button>
  </div>
);

const ContextMenuWithNotifications = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const menuItemsRef = useRef<HTMLDivElement | null>(null);

  const handleNotificationClose = () => setNotification(null);

  const sampleMenu: Array<MenuItemType<unknown>> = [
    { name: 'Title', action: () => {}, isTitle: () => true },
    { name: 'Option 1', action: (item) => setNotification(`Selected Option 1 for ${item}`) },
    { name: 'Option 2', action: (item) => setNotification(`Selected Option 2 for ${item}`), disabled: () => true },
    { separator: true },
    { name: 'Option 3', action: (item) => setNotification(`Selected Option 3 for ${item}`) },
    { name: 'Option 4', action: (item) => setNotification(`Selected Option 4 for ${item}`), disabled: () => true },
    { name: 'Option 5', action: (item) => setNotification(`Selected Option 5 for ${item}`), disabled: () => true },
    { separator: true },
    { name: 'Option 6', action: (item) => setNotification(`Selected Option 6 for ${item}`), disabled: () => true },
    { name: 'Option 7', action: (item) => setNotification(`Selected Option 7 for ${item}`) },
    { name: 'Option 8', action: (item) => setNotification(`Selected Option 8 for ${item}`) },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '500px',
          height: '350px',
          border: '1px solid #ccc',
          position: 'relative',
        }}
      >
        {notification ? (
          <Notification message={notification} onClose={handleNotificationClose} />
        ) : (
          <Notification message={'Select an option (you can use keys).'} onClose={handleNotificationClose} />
        )}
        <ContextMenu
          item="Sample Item"
          menu={sampleMenu}
          menuItemsRef={menuItemsRef}
          openedFromRightClick={false}
          posX={0}
          posY={0}
          isContextMenuCutOff={false}
          genericEnterKey={() => {}}
          handleMenuClose={() => {}}
        />
      </div>
    </div>
  );
};

const onOpenDecorator: Decorator = (Story, context) => {
  const [{ openedFromRightClick, posX, posY }, setArgs] = useArgs();

  return (
    <div style={{ padding: '20px' }}>
      {Story({
        ...context,
        args: {
          ...context.allArgs,
          openedFromRightClick,
          posX,
          posY,
          handleMenuClose: () => setArgs({ openedFromRightClick: false }),
        },
      })}
    </div>
  );
};

const meta: Meta<typeof ContextMenuWithNotifications> = {
  title: 'Components/ContextMenu',
  component: ContextMenuWithNotifications,
  decorators: [onOpenDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    item: { control: 'text' },
    menu: { control: 'object' },
    openedFromRightClick: { control: 'boolean' },
    posX: { control: 'number' },
    posY: { control: 'number' },
    isContextMenuCutOff: { control: 'boolean' },
    genericEnterKey: { action: 'genericEnterKey' },
    handleMenuClose: { action: 'handleMenuClose' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContextMenu: Story = {
  args: {
    item: 'Sample Item',
    openedFromRightClick: false,
    isContextMenuCutOff: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic example of a context menu with sample items and notifications for actions.',
      },
    },
  },
  render: (args) => <ContextMenuWithNotifications {...args} />,
};
