import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../button/Button';

export default function Dialog({
  isOpen,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  primaryActionColor,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  title: string;
  subtitle: string;
  primaryAction: string;
  secondaryAction: string;
  primaryActionColor: 'primary' | 'danger';
  isLoading?: boolean;
}): JSX.Element {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [transitionOpacity, setTransitionOpacity] = useState<string>('opacity-0');
  const [transitionScale, setTransitionScale] = useState<string>('scale-95');

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setTransitionOpacity('opacity-100');
        setTransitionScale('scale-100');
      }, 10);
      setIsVisible(true);
      return () => clearTimeout(timeout);
    } else {
      setTransitionOpacity('opacity-0');
      setTransitionScale('scale-95');
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isVisible && (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
          <div
            className={`absolute inset-0 bg-gray-100/50 transition-opacity
             duration-150 dark:bg-black/75
              ${transitionOpacity}
            `}
            onClick={onClose}
            data-testid="dialog-overlay"
          ></div>

          <div
            className={`absolute
              left-1/2
              top-1/2
              w-full
              max-w-sm
              -translate-x-1/2
              -translate-y-1/2
              transform rounded-2xl
              bg-surface p-5
              transition-all
              duration-150
              dark:bg-gray-1
              ${transitionScale} 
              ${transitionOpacity}`}
          >
            <div className="flex flex-col space-y-2">
              <p className="text-2xl font-medium text-gray-100">{title}</p>
              <p className="text-gray-60">{subtitle}</p>
            </div>

            <div className="mt-5 flex justify-end space-x-2">
              <Button variant="secondary" onClick={onSecondaryAction} disabled={isLoading}>
                {secondaryAction}
              </Button>
              <Button
                onClick={onPrimaryAction}
                loading={isLoading}
                variant={primaryActionColor === 'primary' ? 'primary' : 'destructive'}
              >
                {primaryAction}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
