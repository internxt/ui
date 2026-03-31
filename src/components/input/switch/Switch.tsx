import { useState } from 'react';

export interface SwitchComponentProps {
  size?: 'md' | 'lg' | 'xl';
  id?: string;
  dataTestId?: string;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onClick?: (e?: unknown) => void;
}

/**
 * SwitchComponent
 *
 * A toggle switch component that allows users to toggle between two states: on/off or checked/unchecked.
 *
 * @property {string} size
 * - Defines the size of the switch. Options are 'md', 'lg', or 'xl'.
 *
 * @property {string} [id]
 * - The unique identifier for the switch element.
 *
 * @property {string} [dataTestId]
 * - A custom data attribute for use in testing or identifying the switch in the DOM.
 *
 * @property {boolean} [disabled]
 * - If true, disables the switch, making it unclickable and visually indicating its inactive state.
 *
 * @property {(checked: boolean) => void} [onCheckedChange]
 * - A callback function triggered whenever the checked state changes. Receives the new checked state as an argument.
 *
 * @property {(e?: unknown) => void} [onClick]
 * - A callback function triggered when the switch is clicked. Allows for custom click behavior.
 */

const SwitchComponent = ({
  disabled = false,
  id,
  dataTestId = 'switch',
  size = 'md',
  onClick,
  onCheckedChange,
}: SwitchComponentProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  const backgroundColor = disabled ? 'bg-gray-5' : checked ? 'bg-green' : 'bg-gray-10';

  const sizeClasses = {
    md: 'w-8 h-5',
    lg: 'w-12 h-7',
    xl: 'w-14 h-8',
  };

  const thumbSizeClasses = {
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  const checkedTranslation = {
    md: 'translate-x-[13px]',
    lg: 'translate-x-[21px]',
    xl: 'translate-x-[25px]',
  };

  return (
    <label
      htmlFor={id}
      className={`relative inline-flex items-center cursor-pointer ${sizeClasses[size]}`}
      data-testid={dataTestId}
    >
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={handleCheckedChange}
        onClick={onClick}
        className="sr-only"
      />
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-200 ${backgroundColor} ${
          disabled ? 'data-[state=checked]:bg-green/50' : ''
        }`}
      />
      <span
        className={`block bg-white rounded-full transition-transform duration-200 transform ${
          checked ? checkedTranslation[size] : 'translate-x-[3px]'
        } ${thumbSizeClasses[size]} ${disabled ? 'pointer-events-none' : ''}`}
      />
    </label>
  );
};

export default SwitchComponent;
