import { Header } from '../../../components/header';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TestHeader: Story;
export declare const CustomHeader: Story;
