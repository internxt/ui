import * as Switch from '@radix-ui/react-switch';

interface SwitchComponentProps {
  size: 'md' | 'lg' | 'xl';
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onClick?: () => void;
}

export const SwitchComponent = ({ disabled = false, size = 'md', onClick, onCheckedChange }: SwitchComponentProps) => {
  const backgroundColor = disabled
    ? 'bg-gray-5 data-[state=checked]:bg-green/50'
    : 'bg-gray-10 data-[state=checked]:bg-green';

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
    md: 'data-[state=checked]:translate-x-[13px]',
    lg: 'data-[state=checked]:translate-x-[21px]',
    xl: 'data-[state=checked]:translate-x-[25px]',
  };

  return (
    <Switch.Root
      disabled={disabled}
      className={`${backgroundColor} ${sizeClasses[size]} rounded-full relative outline-none`}
      id="switch"
      data-testid="switch"
      onCheckedChange={onCheckedChange}
      onClick={onClick}
      style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
    >
      <Switch.Thumb
        className={`block bg-white rounded-full transition-transform duration-100 translate-x-[3px] ${checkedTranslation[size]} will-change-transform ${thumbSizeClasses[size]}`}
      />
    </Switch.Root>
  );
};
