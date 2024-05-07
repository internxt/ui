/// <reference types="vite-plugin-svgr/client" />
import Check from '../../assets/icons/check.svg?react';
import { Minus } from '@phosphor-icons/react';

const Checkbox = ({
  checked = true,
  indeterminate = false,
  disabled = false,
  onClick,
  required,
}: {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  required?: boolean;
}): JSX.Element => {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick;
        }}
        onKeyDown={() => {}}
        className={`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded border text-white 
        ${disabled && !checked && 'bg-surface border border-gray-10 cursor-auto'}
        ${!disabled && !checked && 'bg-surface border border-gray-30 cursor-pointer'}
        ${!disabled && checked && 'bg-primary focus:bg-primary-dark cursor-pointer'}
        ${disabled && checked && 'bg-gray-20 cursor-auto'}`}
      >
        {indeterminate ? (
          <Minus className="absolute -inset-px h-5 w-5 px-0.5" />
        ) : (
          checked && <Check className="absolute -inset-px" />
        )}
      </button>
      <input
        checked={checked}
        type="checkbox"
        required={required ?? false}
        readOnly
        className="base-checkbox h-0 w-0 appearance-none opacity-0"
      />
    </>
  );
};

export default Checkbox;
