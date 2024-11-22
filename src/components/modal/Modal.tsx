import { ReactNode, useEffect, useRef, useState } from 'react';

/**
 * Modal component for displaying content in an overlay dialog.
 * @param isOpen - Controls the visibility of the modal.
 * @param onClose - Callback function to close the modal.
 * @param children - Content to display inside the modal.
 * @param maxWidth - Maximum width of the modal.
 * @param width - Width of the modal.
 * @param className - Custom classes for the modal panel.
 * @param preventClosing - Prevents closing the modal when clicking outside.
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  className?: string;
  width?: string;
  preventClosing?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth,
  className,
  width,
  preventClosing = false,
}: ModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showContent, setShowContent] = useState(isOpen);
  const [transitionOpacity, setTransitionOpacity] = useState<string>('opacity-0');
  const [transitionScale, setTransitionScale] = useState<string>('scale-95');

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
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && !preventClosing) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, preventClosing]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !preventClosing) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, preventClosing]);

  return (
    <>
      {showContent && (
        <>
          <div
            className={`
              fixed
              inset-0
              z-50
              bg-highlight/40
              transition-opacity
              duration-150
              ease-out
              ${transitionOpacity}
              pointer-events-none'}              
            `}
          />
          <div
            className={`
              fixed
              inset-0
              z-50
              flex
              min-h-full
              items-center
              justify-center
              transition-opacity
              duration-150
              ease-out
              ${transitionOpacity}
              ${transitionScale}
              pointer-events-none
            `}
          >
            <section
              data-testid={'ModalContent'}
              ref={modalRef}
              className={`
                ${width ?? 'w-full'}
                ${maxWidth ?? 'max-w-lg'}
                ${className ?? 'p-5'}
                text-gray-100
                rounded-2xl
                bg-surface
                shadow-subtle-hard
                transform
                transition-all
                duration-150
                ease-out
                ${transitionOpacity}
                ${transitionScale}
                pointer-events-none
              `}
            >
              {children}
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
