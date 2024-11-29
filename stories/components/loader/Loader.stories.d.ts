import { Meta, StoryObj } from '@storybook/react';
import { default as Loader } from '../../../components/loader/Loader';

declare const meta: Meta<typeof Loader>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SpinnerLoader: Story;
export declare const PulseLoader: Story;
export declare const CustomSpinnerTextLoader: Story;
export declare const CustomPulseTextLoader: Story;
export declare const LargeLoader: Story;
