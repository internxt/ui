import { Meta, StoryObj } from '@storybook/react';
import { InfiniteScroll } from '../../../components/infiniteScroll';

declare const meta: Meta<typeof InfiniteScroll>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NoMoreItems: Story;
