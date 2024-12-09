/// <reference types="vite-plugin-svgr/client" />
import Check from '../../assets/icons/check.svg?react';
import Minus from '../../assets/icons/minus.svg?react';

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

const Checkbox = ({
  id,
  checked = true,
  indeterminate = false,
  onClick,
  required,
  className,
  checkboxDataCy,
  disabled = false,
}: CheckboxProps): JSX.Element => {
  return (
    <label
      className={`relative h-5 w-5 rounded focus-within:outline-primary ${className}`}
      onClick={disabled ? undefined : onClick}
      onKeyDown={() => {}}
    >
      <div
        onClick={(e) => e.preventDefault()}
        data-cy={checkboxDataCy}
        onKeyDown={() => {}}
        className={`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded border text-white ${
          !disabled
            ? indeterminate || checked
              ? 'border-primary bg-primary'
              : 'border-gray-30 hover:border-gray-40'
            : indeterminate || checked
              ? 'bg-gray-20 cursor-auto'
              : 'border-gray-10 cursor-auto'
        }`}
      >
        {indeterminate ? <Minus className="absolute -inset-px" /> : checked && <Check className="absolute -inset-px" />}
      </div>
      <input
        id={id}
        checked={checked}
        type="checkbox"
        required={required ?? false}
        readOnly
        className="base-checkbox h-0 w-0 appearance-none opacity-0"
        disabled={disabled}
      />
    </label>
  );
};

export default Checkbox;
