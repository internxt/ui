import { KeyboardEvent } from '../../../node_modules/react';

export interface InputProps {
    className?: string;
    label?: string;
    variant?: 'default' | 'search' | 'password' | 'email';
    accent?: 'error' | 'warning' | 'success';
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    maxLength?: number;
    onChange?: (v: string) => void;
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    message?: string;
    autofocus?: boolean;
    autoComplete?: 'on' | 'off';
    dataTest?: string;
    name?: string;
    required?: boolean;
    labelDataCy?: string;
    inputDataCy?: string;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    inputClassName?: string;
    borderRadius?: string;
    fontClasses?: string;
}
/**
 * Input component
 *
 * @property {string} [className]
 * - Optional custom class name to be applied to the outermost container of the input.
 *
 * @property {string} [label]
 * - The label for the input field.
 *
 * @property {'default' | 'search' | 'password' | 'email'} [variant]
 * - The variant of the input field. Determines the input type and visual style.
 *   - 'default': Regular input field.
 *   - 'search': Search field with a magnifying glass icon.
 *   - 'password': Password input with an option to toggle visibility.
 *   - 'email': Email input with specific email validation.
 *
 * @property {'error' | 'warning' | 'success'} [accent]
 * - Optional accent color for the input border and message.
 *   - 'error': Red border and error message.
 *   - 'warning': Orange border and warning message.
 *   - 'success': Green border and success message.
 *
 * @property {boolean} [disabled]
 * - If true, disables the input field, preventing user interaction.
 *
 * @property {string} [placeholder]
 * - The placeholder text displayed inside the input when it is empty.
 *
 * @property {string} [value]
 * - The current value of the input field.
 *
 * @property {number} [maxLength]
 * - Maximum number of characters allowed in the input field.
 *
 * @property {(v: string) => void} [onChange]
 * - Callback function that is called whenever the input value changes.
 *
 * @property {() => void} [onClear]
 * - Callback function that is called when the clear button is clicked in the search variant.
 *
 * @property {() => void} [onFocus]
 * - Callback function that is called when the input gains focus.
 *
 * @property {() => void} [onBlur]
 * - Callback function that is called when the input loses focus.
 *
 * @property {string} [message]
 * - Optional message displayed below the input. Used for feedback like error or success.
 *
 * @property {boolean} [autofocus]
 * - If true, the input will automatically gain focus when the component is rendered.
 *
 * @property {'on' | 'off'} [autoComplete]
 * - Controls the auto-completion behavior of the input. Defaults to 'on'.
 *
 * @property {string} [dataTest]
 * - Optional data attribute for testing purposes, used for targeting the input element in tests.
 *
 * @property {string} [name]
 * - The name attribute of the input field, used in form submissions.
 *
 * @property {boolean} [required]
 * - If true, the input is marked as required for form validation.
 *
 * @property {string} [labelDataCy]
 * - Optional data attribute for targeting the label element in tests.
 *
 * @property {string} [inputDataCy]
 * - Optional data attribute for targeting the input element itself in tests.
 *
 * @property {string} [inputClassName]
 * - Optional custom class name to be applied directly to the input element.
 * - These classes will be added after the default classes and can override them.
 *
 * @property {string} [borderRadius='rounded-md']
 * - Optional Tailwind class to control the border radius of the input.
 * - Defaults to 'rounded-md' if not specified.
 *
 * @property {string} [fontClasses='text-lg font-normal']
 * - Optional Tailwind class to control the font size and font weight of the input.
 * - Defaults to 'text-lg font-normal' if not specified.
 *
 * @property {(e: KeyboardEvent<HTMLInputElement>) => void} [onKeyDown]
 * - Callback function for handling keydown events in the input field.
 */
declare const Input: ({ className, label, variant, accent, disabled, placeholder, value, maxLength, onChange, onClear, message, onFocus, onBlur, autofocus, autoComplete, dataTest, name, required, labelDataCy, inputDataCy, onKeyDown, inputClassName, borderRadius, fontClasses, }: InputProps) => JSX.Element;
export default Input;
