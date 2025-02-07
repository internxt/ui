import { ReactNode } from '../../../node_modules/react';

export interface ButtonProps {
    id?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'tertiary';
    type?: 'button' | 'submit';
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: (e?: unknown) => void;
    onKeyDown?: (e?: unknown) => void;
    size?: 'medium' | 'default';
    loading?: boolean;
    dataTest?: string;
    autofocus?: boolean;
    buttonDataCy?: string;
    buttonChildrenDataCy?: string;
}
/**
 * Button component
 *
 * @property {string} [id]
 * - Optional ID for the button element, useful for accessibility and styling.
 *
 * @property {'primary' | 'secondary' | 'ghost' | 'destructive'} [variant]
 * - Defines the button's style variant. Options are:
 *   - 'primary': Standard button style with primary color.
 *   - 'secondary': Button with border and subtle background color.
 *   - 'ghost': Button with transparent background, suitable for icons or light use.
 *   - 'destructive': Button for destructive actions.
 *
 * @property {'button' | 'submit'} [type]
 * - Specifies the type of the button. Defaults to 'button'.
 *   - 'button': Standard button behavior.
 *   - 'submit': Button submits a form when used inside a form element.
 *
 * @property {ReactNode} [children]
 * - The content inside the button, such as text or icons.
 *   - Can be a single element or an array of elements.
 *
 * @property {string} [className]
 * - Custom CSS classes for additional styling of the button.
 *
 * @property {boolean} [disabled]
 * - Disables the button, preventing user interaction and applying a disabled style.
 *   - Defaults to false.
 *
 * @property {(e?: unknown) => void} [onClick]
 * - Function called when the button is clicked. Accepts an optional event object.
 *
 * @property {(e?: unknown) => void} [onKeyDown]
 * - Function called when a key is pressed while the button is focused. Accepts an optional event object.
 *
 * @property {'medium' | 'default'} [size]
 * - Specifies the button size. Options are:
 *   - 'default': Standard size.
 *   - 'medium': Slightly smaller size for compact use.
 *
 * @property {boolean} [loading]
 * - If true, shows a loading spinner inside the button.
 *
 * @property {string} [dataTest]
 * - Custom data attribute used for test automation or tracking purposes.
 *
 * @property {boolean} [autofocus]
 * - If true, the button will be focused automatically when the page loads.
 *
 * @property {string} [buttonDataCy]
 * - Custom data attribute for the button element.
 *
 * @property {string} [buttonChildrenDataCy]
 * - Custom data attribute for the children of the button.
 */
declare const Button: ({ variant, type, id, children, className, disabled, onClick, onKeyDown, size, loading, dataTest, autofocus, buttonDataCy, buttonChildrenDataCy, }: Readonly<ButtonProps>) => JSX.Element;
export default Button;
