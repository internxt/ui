interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const ToolbarButton = ({ onClick, isActive, disabled, children }: ToolbarButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`p-1 rounded transition-colors ${isActive ? 'bg-gray-10 text-primary' : 'hover:bg-gray-5 text-gray-60'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);
