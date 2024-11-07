/// <reference types="vite-plugin-svgr/client" />
import Check from '../../assets/icons/check.svg?react';
import Minus from '../../assets/icons/minus.svg?react';

interface CheckboxProps {
  id?: string;
  checked?: boolean;
  indeterminate?: boolean;
  onClick?: React.DOMAttributes<HTMLLabelElement>['onClick'];
  required?: boolean;
  className?: string;
  checkboxDataCy?: string;
  disabled?: boolean;
}

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
