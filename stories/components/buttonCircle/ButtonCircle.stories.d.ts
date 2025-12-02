import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ children, variant, active, onClick, onClickToggleButton, className, dropdown, indicator, isOpen, handleOpen, handleClose, }: import('../../../components/buttonCircle').CircleButtonProps) => JSX.Element;
    parameters: {
        layout: string;
        backgrounds: {
            default: string;
            values: {
                name: string;
                value: string;
            }[];
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Active: Story;
export declare const WithWarning: Story;
export declare const WithCustomIndicator: Story;
export declare const CancelButton: Story;
export declare const ButtonGroup: Story;
