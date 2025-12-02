import { Meta, StoryObj } from '@storybook/react-vite';
import { Copyable } from '../../../components/copyable';
declare const meta: Meta<typeof Copyable>;
export default meta;
type Story = StoryObj<typeof Copyable>;
export declare const Default: Story;
export declare const WithCustomClassName: Story;
