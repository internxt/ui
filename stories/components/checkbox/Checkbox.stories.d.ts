import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../components/checkbox';

declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Enabled: Story;
export declare const Disabled: Story;
export declare const Checked: Story;
export declare const CheckedAndDisabled: Story;
export declare const Indeterminate: Story;
export declare const IndeterminateDisabled: Story;