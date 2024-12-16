import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/button';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Ghost: Story;
export declare const Destructive: Story;
export declare const Loading: Story;