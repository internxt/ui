import { IconProps } from '@phosphor-icons/react';

interface SidenavItemProps {
  label: string;
  notifications?: number;
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  onClick?: () => void;
  iconDataCy?: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  subsection?: boolean;
}

const SidenavItem = ({
  label,
  Icon,
  onClick,
  notifications,
  iconDataCy,
  isActive = false,
  isCollapsed = false,
  subsection = false,
}: SidenavItemProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      data-cy={iconDataCy}
      className={`flex w-full flex-col focus-visible:bg-gray-10 rounded-lg ${
        isActive ? 'bg-primary/20' : 'hover:bg-gray-5'
      } ${subsection ? 'pl-5' : ''}`}
      title={isCollapsed ? label : undefined}
    >
      <div className="flex flex-row px-2.5 py-2 w-full items-center justify-between min-h-[36px]">
        <div className={`flex flex-row gap-3 items-center ${isActive ? 'text-primary' : 'text-gray-80'}`}>
          <Icon size={20} weight={isActive ? 'fill' : 'regular'} className="flex-shrink-0" />
          <p className={`font-medium whitespace-nowrap overflow-hidden transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            {label}
          </p>
        </div>
        <div
          className={`flex rounded-full px-2 py-1 transition-opacity duration-300 ${isActive ? 'text-white bg-primary' : 'bg-gray-10 text-gray-60'} ${isCollapsed || !notifications ? 'opacity-0 invisible' : 'opacity-100'}`}
        >
          {notifications && <p className="text-xs font-medium">{notifications}</p>}
        </div>
      </div>
    </button>
  );
};

export default SidenavItem;
