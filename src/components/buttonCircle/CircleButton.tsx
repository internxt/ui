import { CaretUp, Warning } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

type ButtonVariant = 'default' | 'warning' | 'cancel';

export interface CircleButtonProps {
  children?: JSX.Element | JSX.Element[];
  variant?: ButtonVariant;
  active?: boolean;
  onClick?: () => void;
  onClickToggleButton?: () => void;
  className?: string;
  dropdown?: React.ReactNode;
  indicator?: {
    icon?: JSX.Element;
    className?: string;
  };
}

const CircleButton = ({
  children,
  variant = 'default',
  active = false,
  onClick,
  onClickToggleButton,
  className = '',
  dropdown,
  indicator,
}: CircleButtonProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        const circleButton = document.querySelector(`[data-circle-button="${variant}"]`);
        if (circleButton && !circleButton.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, variant]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dropdown) {
      onClickToggleButton?.();
      setIsOpen(!isOpen);
    }
  };

  const handleMainClick = () => {
    onClick?.();
  };

  const getButtonStyles = () => {
    switch (variant) {
      case 'cancel':
        return 'bg-red hover:bg-red/85';
      case 'warning':
        return active ? 'bg-white/85' : 'bg-white/25 hover:bg-white/35';
      default:
        return active ? 'bg-white/85' : 'bg-white/25 hover:bg-white/35';
    }
  };

  const renderIndicator = () => {
    if (!indicator) return null;

    if (variant === 'warning') {
      return (
        <div className="absolute -top-1 -right-1 h-5 w-5 bg-orange border border-black/35 rounded-full flex items-center justify-center">
          <Warning size={12} color="black" weight="bold" />
        </div>
      );
    }

    return (
      <div
        className={`absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full ${indicator.className || ''}`}
      >
        {indicator.icon}
      </div>
    );
  };

  const renderDropdownButton = () => {
    if (!dropdown || variant === 'cancel' || variant === 'warning') return null;

    return (
      <button
        onClick={handleToggle}
        className="absolute -top-1 -right-1 h-5 w-5 border bg-white border-black/35 rounded-full flex items-center justify-center hover:bg-gray-50"
      >
        <CaretUp size={10} color="black" weight="fill" />
      </button>
    );
  };

  return (
    <div className="relative w-12 h-12" data-circle-button={variant}>
      <button
        onClick={handleMainClick}
        className={`
          h-11 w-11
          flex items-center justify-center
          rounded-full
          transition-all duration-200
          ${getButtonStyles()}
          ${className}
        `}
      >
        {children}
      </button>
      {renderDropdownButton()}
      {renderIndicator()}
      {isOpen && dropdown && variant !== 'cancel' && <div className="absolute bottom-full mb-2 left-0">{dropdown}</div>}
    </div>
  );
};

export default CircleButton;
