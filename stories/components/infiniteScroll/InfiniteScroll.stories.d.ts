import { Meta, StoryObj } from '@storybook/react';
import { default as InfiniteScroll } from '../../../components/infiniteScroll/InfiniteScroll';

declare const meta: Meta<typeof InfiniteScroll>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NoMoreItems: Story;
