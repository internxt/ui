import { Meta, StoryObj } from '@storybook/react-vite';
import { default as UserCheap } from '../../../../../components/mail/cheaps/user/UserCheap';
declare const meta: Meta<typeof UserCheap>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithAvatar: Story;
export declare const LongName: Story;
export declare const LongEmail: Story;
