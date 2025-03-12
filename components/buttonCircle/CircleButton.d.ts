type ButtonVariant = 'default' | 'warning' | 'cancel';
export interface CircleButtonProps {
    children?: JSX.Element | JSX.Element[];
    variant?: ButtonVariant;
    active?: boolean;
    onClick?: () => void;
    onClickToggleButton?: () => void;
    className?: string;
    dropdown?: React.ReactNode;
    indicator?: {
        icon?: JSX.Element;
        className?: string;
    };
    isOpen?: boolean;
    handleOpen?: () => void;
    handleClose?: () => void;
}
declare const CircleButton: ({ children, variant, active, onClick, onClickToggleButton, className, dropdown, indicator, isOpen, handleOpen, handleClose, }: CircleButtonProps) => JSX.Element;
export default CircleButton;
