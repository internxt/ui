import { ReactNode } from '../../../node_modules/react';

/**
 * Modal component for displaying content in an overlay dialog.
 * @param isOpen - Controls the visibility of the modal.
 * @param onClose - Callback function to close the modal.
 * @param children - Content to display inside the modal.
 * @param maxWidth - Maximum width of the modal.
 * @param width - Width of the modal.
 * @param className - Custom classes for the modal panel.
 * @param preventClosing - Prevents closing the modal when clicking outside.
 */
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: string;
    className?: string;
    width?: string;
    preventClosing?: boolean;
}
declare const Modal: ({ isOpen, onClose, children, maxWidth, className, width, preventClosing, }: ModalProps) => JSX.Element | null;
export default Modal;
