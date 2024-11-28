import { Meta, StoryObj } from '@storybook/react';
import { default as BaseDialog } from '../../../components/baseDialog/BaseDialog';

declare const meta: Meta<typeof BaseDialog>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithoutCloseButton: Story;
export declare const CustomStyles: Story;
