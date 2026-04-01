export interface TextAreaComponentProps {
    disabled?: boolean;
    accentColor?: 'red';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
}
/**
 * TextArea component
 *
 * @param {TextAreaComponentProps} props - Properties of the TextArea component.
 *
 * @property {boolean} [disabled=false]
 * - Optional flag to disable the text area. Defaults to false if not specified.
 *
 * @property {'red'} [accentColor]
 * - Optional accent color for the text area.
 *
 * @property {string} [placeholder='']
 * - Optional placeholder text that is displayed when the text area is empty.
 *
 * @property {string} [value='']
 * - Optional value for the text area. The content inside the text area is controlled by this value.
 *
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange]
 * - Optional callback function triggered when the text area value changes. Receives the event object as an argument.
 *
 * @property {string} [name]
 * - Optional name attribute for the text area, typically used for form submissions.
 *
 * @returns {JSX.Element}
 * - The rendered TextArea component.
 */
declare const TextArea: ({ disabled, accentColor, placeholder, value, onChange, name, }: TextAreaComponentProps) => JSX.Element;
export default TextArea;
