interface RadioButtonProps {
  checked: boolean;
  id?: string;
  disabled?: boolean;
  onClick: (e?: unknown) => void;
}

export const RadioButton = ({ checked, id, disabled = false, onClick }: RadioButtonProps) => {
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
      <input type="radio" className="h-0 w-0 appearance-none opacity-0" checked />
    </div>
  );
};
