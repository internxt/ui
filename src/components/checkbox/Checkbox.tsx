import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const Checkbox = ({
  asChild = false,
  defaultChecked = true,
  checked = true,
  disabled = false,
  required,
  name,
  value,
}: {
  asChild?: boolean;
  defaultChecked?: boolean | 'indeterminate';
  checked?: boolean | 'indeterminate';
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(checked);
  const [isDefaultChecked, setIsDefaultChecked] = useState<boolean | 'indeterminate'>(defaultChecked);
  const isIndetermiante = isChecked === 'indeterminate' || isDefaultChecked === 'indeterminate';

  const onCheckedChange = () => {
    if (isIndetermiante) {
      setIsChecked(false);
      setIsDefaultChecked(false);
    } else {
      setIsChecked(!isChecked);
      setIsDefaultChecked(!isChecked);
    }
  };

  return (
    <RadixCheckbox.Root
      className={`h-5 w-5 rounded flex justify-center items-center 
      ${!disabled && isChecked && 'bg-primary hover:bg-primary-dark'}
      ${disabled && !isChecked && 'bg-surface border border-gray-10'}
      ${!disabled && !isChecked && 'bg-surface border border-gray-30'}
      ${disabled && isChecked && 'bg-gray-20'}
      `}
      asChild={asChild}
      defaultChecked={isDefaultChecked}
      checked={isChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
    >
      <RadixCheckbox.Indicator className="">
        {isChecked === 'indeterminate' && <DividerHorizontalIcon className="text-white" />}
        {isChecked === true && <CheckIcon className="text-white" />}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;
