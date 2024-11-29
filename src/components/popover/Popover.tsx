import { useState, useRef, useEffect } from 'react';
import { ReactNode } from 'react';

export interface PopoverProps {
  childrenButton: ReactNode;
  panel: (closePopover: () => void) => ReactNode;
  className?: string;
  classButton?: string;
}

/**
 * Popover component
 *
 * @property {ReactNode} childrenButton
 * - The content to be displayed inside the trigger button.
 *
 * @property {(closePopover: () => void) => ReactNode} panel
 * - A function that returns the content to be displayed inside the popover panel.
 * It receives a `closePopover` function as a parameter, which can be used to programmatically close the popover.
 *
 * @property {string} [className]
 * - Additional custom classes for the outermost container of the popover.
 * Can be used for positioning or adding custom styles.
 *
 * @property {string} [classButton]
 * - Custom classes for the trigger button.
 *
 * @returns {JSX.Element}
 * - The rendered Popover component.
 */

const Popover = ({ childrenButton, panel, className, classButton }: PopoverProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [showContent, setShowContent] = useState(isOpen);
  const [transitionOpacity, setTransitionOpacity] = useState<string>('opacity-0');
  const [transitionScale, setTransitionScale] = useState<string>('scale-95');

  const togglePopover = () => setIsOpen((prev) => !prev);

  const handleMouseDown = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      closePopover();
    }
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setTransitionOpacity('opacity-100');
        setTransitionScale('scale-100');
      }, 10);
      setShowContent(true);
      return () => clearTimeout(timeout);
    } else {
      setTransitionOpacity('opacity-0');
      setTransitionScale('scale-95');
      const timeout = setTimeout(() => {
        setShowContent(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div style={{ lineHeight: 0 }} className={`relative ${className}`}>
      <button
        onClick={togglePopover}
        onMouseDown={(e) => e.stopPropagation()}
        className={`cursor-pointer outline-none ${classButton}`}
        aria-expanded={isOpen}
      >
        {childrenButton}
      </button>
      {showContent && (
        <div
          ref={panelRef}
          className={`
            absolute
            right-0
            z-50
            mt-1
            origin-top-right
            transform
            rounded-md
            border
            border-gray-10
            bg-surface
            py-1.5 
            shadow-subtle
            duration-100
            ease-out
            dark:bg-gray-5 
            ${transitionOpacity}
            ${transitionScale}
          `}
        >
          {panel(closePopover)}
        </div>
      )}
    </div>
  );
};

export default Popover;
