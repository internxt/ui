import { Meta, StoryObj } from '@storybook/react-vite';
import { List } from '../../../components/list';
type DriveItemData = {
    id: number;
    name: string;
    power: number;
    type: string;
};
declare const meta: Meta<typeof List<DriveItemData, 'name' | 'power' | 'type'>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ListLayout: Story;
