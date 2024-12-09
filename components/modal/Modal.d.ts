import { ReactNode } from '../../../node_modules/react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: string;
    className?: string;
    width?: string;
    preventClosing?: boolean;
}
/**
 * Modal component
 *
 * @param {ModalProps} props - Properties of the Modal component.
 *
 * @property {boolean} isOpen
 * - Controls the visibility of the modal. If `true`, the modal is shown; if `false`, the modal is hidden.
 *
 * @property {() => void} onClose
 * - Callback function that is called when the modal is closed.
 * This function is triggered by clicking outside the modal or
 * pressing the 'Escape' key (unless `preventClosing` is `true`).
 *
 * @property {ReactNode} children
 * - The content to be displayed inside the modal.
 *
 * @property {string} [maxWidth]
 * - Optional maximum width for the modal. Defaults to `'max-w-lg'` if not specified.
 *
 * @property {string} [className]
 * - Optional custom class names to apply to the modal content wrapper.
 *
 * @property {string} [width]
 * - Optional width for the modal. Defaults to `'w-full'` if not specified.
 *
 * @property {boolean} [preventClosing=false]
 * - Optional flag to prevent the modal from closing when clicking outside or pressing the 'Escape' key.
 *
 * @returns {JSX.Element | null}
 * - The rendered Modal component, or `null` if `isOpen` is `false`.
 *
 * The component uses a series of hooks and effects to manage modal transitions and handle click and key press events.
 * It supports smooth opacity and scale transitions during opening and closing,
 * and prevents interaction with the modal's background during the transitions.
 *
 * The `preventClosing` prop ensures the modal stays open when interacting outside of the modal or pressing 'Escape'.
 *
 * The modal is displayed with a fixed position in the center of the screen, with a backdrop overlay.
 * The content of the modal is rendered inside a flex container with transition effects to animate its appearance.
 */
declare const Modal: ({ isOpen, onClose, children, maxWidth, className, width, preventClosing, }: ModalProps) => JSX.Element | null;
export default Modal;
