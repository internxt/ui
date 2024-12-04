export interface RadioButtonProps {
  checked: boolean;
  id?: string;
  disabled?: boolean;
  onClick: (e?: unknown) => void;
}

/**
 * RadioButton component
 *
 * A custom radio button component that allows the user to select one option from a group of choices.
 *
 * @property {boolean} checked
 * - Determines whether the radio button is selected (checked) or not. If true, the radio button appears active.
 *
 * @property {string} [id]
 * - The unique identifier for the radio button element. Useful for associating labels or customizing the radio button.
 *
 * @property {boolean} [disabled]
 * - If true, disables the radio button, making it unclickable and visually indicating its inactive state.
 *
 * @property {(e?: unknown) => void} onClick
 * - A callback function triggered when the radio button is clicked.
 * Can be used to handle custom behavior when the button is selected.
 */

const RadioButton = ({ checked, id, disabled = false, onClick }: RadioButtonProps) => {
  const borderStyle = disabled ? 'border-gray-10' : 'border-gray-40';
  const checkedStyle =
    disabled && checked ? 'border-0 bg-gray-20' : checked && 'border-0 bg-primary active:bg-primary-dark';

  return (
    <div id={id} className="flex cursor-pointer">
      <button
        disabled={disabled}
        onClick={onClick}
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${checkedStyle} ${borderStyle}`}
      >
        {<div className={`h-2.5 w-2.5 rounded-full ${checked || disabled ? 'bg-white' : 'hover:bg-gray-10'}`}></div>}
      </button>
      <input type="radio" className="h-0 w-0 appearance-none opacity-0" checked readOnly />
    </div>
  );
};

export default RadioButton;
