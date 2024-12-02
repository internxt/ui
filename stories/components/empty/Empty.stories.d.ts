import { Meta, StoryObj } from '@storybook/react';
import { default as Empty } from '../../../components/empty/Empty';

declare const meta: Meta<typeof Empty>;
export default meta;
type Story = StoryObj<typeof Empty>;
export declare const Default: Story;
export declare const WithAction: Story;
