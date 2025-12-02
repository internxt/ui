import { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuProps } from '../../../components/menu';
declare const meta: Meta<typeof Menu>;
export default meta;
type Story = StoryObj<MenuProps<unknown>>;
export declare const Default: Story;
export declare const WithIcons: Story;
