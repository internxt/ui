import { Meta, StoryObj } from '@storybook/react';
import { default as TextArea } from '../../../components/textArea/TextArea';

declare const meta: Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AccentColorDefault: Story;
export declare const AccentColorRed: Story;
