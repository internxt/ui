import { Meta, StoryObj } from '@storybook/react-vite';
import { UsageWarningBanner } from '../../../components/feedback/notifications/usageBanner';
declare const meta: Meta<typeof UsageWarningBanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LowUsage: Story;
export declare const AlmostFull: Story;
export declare const Loading: Story;
