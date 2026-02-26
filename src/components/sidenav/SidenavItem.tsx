import { IconProps } from '@phosphor-icons/react';
import { ComponentType, ReactNode } from 'react';

interface SidenavItemProps {
  label: string;
  notifications?: number;
  to?: string;
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  onClick?: () => void;
  iconDataCy?: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  subsection?: boolean;
  LinkComponent?: ComponentType<{ to: string; className?: string; children: ReactNode }>;
}

const SidenavItem = ({
  label,
  to,
  Icon,
  onClick,
  notifications,
  iconDataCy,
  isActive = false,
  isCollapsed = false,
  subsection = false,
  LinkComponent,
}: SidenavItemProps): JSX.Element => {
  const content: ReactNode = (
    <div
      className={`flex flex-row px-2.5 py-2 w-full items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
    >
      <div className={`flex flex-row gap-3 items-center ${isActive ? 'text-primary' : 'text-gray-60'}`}>
        <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
        {!isCollapsed && <p>{label}</p>}
      </div>
      {!isCollapsed && notifications && (
        <div className={`flex rounded-full px-1.5 py-0.5 ${isActive ? 'bg-primary' : 'bg-gray-40'}`}>
          <p className="text-white text-xs font-medium">{notifications}</p>
        </div>
      )}
    </div>
  );

  const handleClick = onClick || (() => undefined);

  return (
    <button
      onClick={handleClick}
      data-cy={iconDataCy}
      className={`flex w-full flex-col focus-visible:bg-gray-10 rounded-lg ${
        isActive ? 'bg-primary/20' : 'hover:bg-gray-5'
      } ${subsection ? 'pl-5' : ''}`}
      title={isCollapsed ? label : undefined}
    >
      {to && LinkComponent ? (
        <LinkComponent to={to} className="no-underline w-full">
          {content}
        </LinkComponent>
      ) : (
        content
      )}
    </button>
  );
};

export default SidenavItem;
