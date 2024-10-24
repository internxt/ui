import { Meta, StoryObj } from '@storybook/react';
import { default as Input } from '../../../components/input/Input';

declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TextLarge: Story;
export declare const TextMedium: Story;
export declare const PasswordLarge: Story;
export declare const PasswordMedium: Story;
