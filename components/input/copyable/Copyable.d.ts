export interface CopyableProps {
    className?: string;
    classText?: string;
    text: string;
    copiedText?: string;
    copyToClipboardText?: string;
}
/**
 * Copyable component
 *
 * @property {string} [className]
 * - Custom classes for the outer container.
 *
 * @property {string} [classText]
 * - Custom classes for the selected text.
 *
 * @property {string} text
 * - The text content to be displayed and copied to the clipboard.
 *
 * @property {string} copiedText
 * - The text to display in the tooltip when the content has been copied.
 *
 * @property {string} copyToClipboardText
 * - The text to display in the tooltip when the content can be copied to the clipboard.
 */
declare const Copyable: ({ className, classText, text, copiedText, copyToClipboardText, }: CopyableProps) => JSX.Element;
export default Copyable;
