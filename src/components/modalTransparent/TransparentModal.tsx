import { ReactNode, useEffect, useRef, useState } from 'react';

export interface TransparentModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  disableBackdrop?: boolean;
}

const TransparentModal = ({ isOpen, onClose, children, className, disableBackdrop = false }: TransparentModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(isOpen);
  const [transitionOpacity, setTransitionOpacity] = useState('opacity-0');
  const [transitionScale, setTransitionScale] = useState('scale-95');

  useEffect(() => {
    if (isOpen) {
      setShowContent(true);
      const timeout = setTimeout(() => {
        setTransitionOpacity('opacity-100');
        setTransitionScale('scale-100');
      }, 10);
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
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen && !disableBackdrop) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, disableBackdrop]);

  if (!showContent) return null;

  return (
    <div
      className={`
      fixed 
      inset-0 
      z-50 
      flex 
      items-center 
      justify-center
      ${disableBackdrop ? 'pointer-events-none' : ''}
    `}
    >
      {/* Backdrop */}
      {!disableBackdrop && (
        <div
          className={`
            fixed 
            inset-0 
            bg-black/50 
            backdrop-blur-sm 
            transition-opacity 
            duration-200
            ${transitionOpacity}
          `}
        />
      )}

      {/* Modal */}
      <div
        ref={modalRef}
        className={`
          relative
          flex
          bg-black/15
          border
          border-white/15
          rounded-[20px]
          backdrop-blur
          shadow-lg
          transition-all
          duration-200
          pointer-events-auto
          ${transitionOpacity}
          ${transitionScale}
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default TransparentModal;
