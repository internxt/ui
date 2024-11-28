import { Meta, StoryObj } from '@storybook/react';
import { default as Dropdown } from '../../../components/dropdown/Dropdown';

declare const meta: Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const RightAlign: Story;
export declare const LeftAlign: Story;
