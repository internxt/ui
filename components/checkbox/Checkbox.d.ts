export interface CheckboxProps {
    id?: string;
    checked?: boolean;
    indeterminate?: boolean;
    onClick?: React.DOMAttributes<HTMLLabelElement>['onClick'];
    required?: boolean;
    className?: string;
    checkboxDataCy?: string;
    disabled?: boolean;
}
/**
 * Checkbox component
 *
 * @property {string} [id]
 * - Optional ID for the checkbox input element, useful for accessibility and styling.
 *
 * @property {boolean} [checked]
 * - Controls whether the checkbox is checked. Defaults to true.
 *   - If true, the checkbox appears checked.
 *   - If false, the checkbox appears unchecked.
 *
 * @property {boolean} [indeterminate]
 * - If true, the checkbox appears in an indeterminate state (a visual state between checked and unchecked).
 *   - This state is typically used for a parent checkbox representing a partial selection of child checkboxes.
 *
 * @property {React.DOMAttributes<HTMLLabelElement>['onClick']} [onClick]
 * - Function called when the checkbox label is clicked. It is triggered only if the checkbox is not disabled.
 *   - Accepts an event object from the click event.
 *
 * @property {boolean} [required]
 * - If true, marks the checkbox as required in form validation.
 *   - Defaults to false.
 *
 * @property {string} [className]
 * - Custom CSS classes for additional styling of the checkbox container element.
 *
 * @property {string} [checkboxDataCy]
 * - Custom data attribute for the checkbox element.
 *
 * @property {boolean} [disabled]
 * - Disables the checkbox, preventing user interaction and applying a disabled style.
 *   - If true, the checkbox cannot be checked or unchecked.
 *   - Defaults to false.
 */
declare const Checkbox: ({ id, checked, indeterminate, onClick, required, className, checkboxDataCy, disabled, }: CheckboxProps) => JSX.Element;
export default Checkbox;
