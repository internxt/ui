import { Meta, StoryObj } from '@storybook/react-vite';
import { InfiniteScroll } from '../../../components/layout/infiniteScroll';
declare const meta: Meta<typeof InfiniteScroll>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NoMoreItems: Story;
