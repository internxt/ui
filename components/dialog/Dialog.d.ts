export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    onPrimaryAction: () => void;
    onSecondaryAction: () => void;
    title: string;
    subtitle: string;
    primaryAction: string | JSX.Element;
    secondaryAction: string | JSX.Element;
    primaryActionColor: 'primary' | 'danger';
    isLoading?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg';
}
/**
 * Dialog component
 *
 * @property {boolean} isOpen
 * - Controls whether the dialog is open or closed. If true, the dialog becomes visible.
 *
 * @property {() => void} onClose
 * - Callback function triggered when the overlay or the close button is clicked. Used to close the dialog.
 *
 * @property {() => void} onPrimaryAction
 * - Callback function triggered when the primary action button is clicked.
 *
 * @property {() => void} onSecondaryAction
 * - Callback function triggered when the secondary action button is clicked.
 *
 * @property {string} title
 * - The title of the dialog, displayed at the top of the dialog box.
 *
 * @property {string} subtitle
 * - A subtitle for the dialog, displayed below the title.
 *
 * @property {string | JSX.Element} primaryAction
 * - The label or content for the primary action button.
 *
 * @property {string} secondaryAction
 * - The label or content for the secondary action button.
 *
 * @property {('primary' | 'danger')} primaryActionColor
 * - Defines the color of the primary action button. Can either be 'primary' or 'danger'.
 *
 * @property {boolean} [isLoading]
 * - Optional flag to indicate if the buttons should show a loading state. Defaults to false.
 *
 * @property {'sm' | 'md' | 'lg'} [maxWidth]
 * - Optional maximum width for the dialog. Can be 'sm', 'md', or 'lg'.
 *
 * @returns {JSX.Element}
 * - The rendered dialog component.
 */
declare const Dialog: ({ isOpen, onClose, onPrimaryAction, onSecondaryAction, title, subtitle, primaryAction, secondaryAction, primaryActionColor, isLoading, maxWidth, }: DialogProps) => JSX.Element;
export default Dialog;
