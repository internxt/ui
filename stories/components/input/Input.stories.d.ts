import { Meta, StoryObj } from '@storybook/react';
import { default as Input } from '../../../components/input/Input';

declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Text: Story;
export declare const Search: Story;
export declare const Password: Story;
export declare const SuccessMessage: Story;
export declare const ErrorMessage: Story;
export declare const WarningMessage: Story;
