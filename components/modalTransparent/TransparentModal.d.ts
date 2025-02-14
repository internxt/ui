import { ReactNode } from '../../../node_modules/react';

export interface TransparentModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
    disableBackdrop?: boolean;
}
declare const TransparentModal: ({ isOpen, onClose, children, className, disableBackdrop }: TransparentModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default TransparentModal;
