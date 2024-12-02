import { Meta, StoryObj } from '@storybook/react';
import { default as Tooltip } from '../../../components/tooltip/Tooltip';

declare const meta: Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof Tooltip>;
export declare const WithoutArrow: Story;
export declare const PopsFromTop: Story;
export declare const PopsFromLeft: Story;
export declare const PopsFromRight: Story;
export declare const PopsFromBottom: Story;
