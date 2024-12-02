import { Meta, StoryObj } from '@storybook/react';
import { default as Copyable } from '../../../components/copyable/Copyable';

declare const meta: Meta<typeof Copyable>;
export default meta;
type Story = StoryObj<typeof Copyable>;
export declare const Default: Story;
export declare const WithCustomClassName: Story;
