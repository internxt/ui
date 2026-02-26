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
      <div
        className={`flex flex-row px-2.5 py-2 w-full items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
      >
        <div className={`flex flex-row gap-3 items-center ${isActive ? 'text-primary' : 'text-gray-80'}`}>
          <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
          {!isCollapsed && <p className="font-medium">{label}</p>}
        </div>
        {!isCollapsed && notifications && (
          <div
            className={`flex rounded-full px-2 py-1 ${isActive ? 'text-white bg-primary' : 'bg-gray-10 text-gray-60'}`}
          >
            <p className="text-xs font-medium">{notifications}</p>
          </div>
        )}
      </div>
    </button>
  );
};

export default SidenavItem;
