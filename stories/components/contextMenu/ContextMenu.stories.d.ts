import { Meta, StoryObj } from '@storybook/react';

declare const ContextMenuWithNotifications: () => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof ContextMenuWithNotifications>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultContextMenu: Story;
