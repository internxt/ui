import { useRef, useState } from 'react';
import { ArrowsClockwiseIcon, IconProps } from '@phosphor-icons/react';

// Match Tailwind duration (1s per rotation)
const SPIN_DURATION_MS = 1000;

interface SidenavItemProps {
  label: string;
  notifications?: number;
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  onClick?: () => void;
  onRefresh?: () => void | Promise<void>;
  iconDataCy?: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  subsection?: boolean;
}

const SidenavItem = ({
  label,
  Icon,
  onClick,
  onRefresh,
  notifications,
  iconDataCy,
  isActive = false,
  isCollapsed = false,
  subsection = false,
}: SidenavItemProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const showRefresh = (isHovered || isSpinning) && !!onRefresh;

  const onRefreshClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onRefresh?.();

    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current);
    }
    setIsSpinning(true);
    spinTimeoutRef.current = setTimeout(() => setIsSpinning(false), SPIN_DURATION_MS);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cy={iconDataCy}
      className={`flex w-full flex-col overflow-hidden focus-visible:bg-gray-10 rounded-lg cursor-pointer ${
        isActive ? 'bg-primary/20' : 'hover:bg-gray-5'
      } ${subsection ? 'pl-5' : ''}`}
      title={isCollapsed ? label : undefined}
    >
      <div className="flex flex-row px-2.5 py-2 w-full items-center justify-between h-9">
        <div className={`flex flex-row gap-3 items-center ${isActive ? 'text-primary' : 'text-gray-80'}`}>
          <Icon size={20} weight={isActive ? 'fill' : 'regular'} className="flex-shrink-0" />
          <p
            className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? 'opacity-0 delay-200' : 'opacity-100 delay-0'}`}
          >
            {label}
          </p>
        </div>

        {showRefresh ? (
          <div
            role="button"
            tabIndex={0}
            onClick={onRefreshClick}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onRefreshClick(event as unknown as React.MouseEvent<HTMLDivElement>);
              }
            }}
            data-cy={iconDataCy ? `${iconDataCy}-refresh` : undefined}
            title="Refresh"
            className={`flex rounded-full p-1 hover:bg-gray-10 ${isActive ? 'text-primary' : 'text-gray-60'} ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100'}`}
          >
            <ArrowsClockwiseIcon size={16} className={isSpinning ? 'animate-spin' : undefined} />
          </div>
        ) : (
          !!notifications && (
            <div
              className={`flex rounded-full px-2 py-1 ${isActive ? 'text-white bg-primary' : 'bg-gray-10 text-gray-60'} ${isCollapsed ? 'opacity-0 invisible delay-300' : 'opacity-100 delay-0'}`}
            >
              {<p className="text-xs font-medium">{notifications}</p>}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SidenavItem;
