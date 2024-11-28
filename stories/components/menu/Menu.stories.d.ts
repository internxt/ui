import { Meta, StoryObj } from '@storybook/react';
import { default as Menu, MenuProps } from '../../../components/menu/Menu';

declare const meta: Meta<typeof Menu>;
export default meta;
type Story = StoryObj<MenuProps<unknown>>;
export declare const Default: Story;
export declare const WithIcons: Story;
