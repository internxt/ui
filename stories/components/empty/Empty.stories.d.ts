import { Meta, StoryObj } from '@storybook/react';
import { Empty } from '../../../components/empty';

declare const meta: Meta<typeof Empty>;
export default meta;
type Story = StoryObj<typeof Empty>;
export declare const Default: Story;
export declare const WithAction: Story;
