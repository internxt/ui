import { Meta, StoryObj } from '@storybook/react';
import { default as Card } from '../../../components/card/Card';

declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
export declare const CustomStyledCard: Story;
