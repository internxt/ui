import { SidebarIcon } from '@phosphor-icons/react';
import { SuiteLauncher } from '../suiteLauncher';

interface SidenavHeaderProps {
  logo: string;
  title: string;
  onClick: () => void;
  isCollapsed: boolean;
  className?: string;
  onToggleCollapse?: () => void;
  suiteLauncher?: {
    className?: string;
    suiteArray: {
      icon: JSX.Element;
      title: string;
      onClick: () => void;
      isMain?: boolean;
      availableSoon?: boolean;
      isLocked?: boolean;
    }[];
    soonText: string;
  };
}

const SidenavHeader = ({
  logo,
  title,
  onClick,
  isCollapsed,
  className,
  onToggleCollapse,
  suiteLauncher,
}: SidenavHeaderProps): JSX.Element => {
  return (
    <div className={`flex flex-row justify-between w-full py-5 px-2 ${className}`}>
      <div className="relative flex flex-row gap-2 items-center">
        <button className="flex flex-row gap-2 items-center" onClick={onClick}>
          <img src={logo} width={28} alt={title} className={`flex-shrink-0 ${isCollapsed ? 'group-hover:hidden' : ''}`} />
          <p className={`text-xl font-medium text-gray-100 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            {title}
          </p>
        </button>
        {isCollapsed && onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="hidden group-hover:flex items-center justify-center text-gray-80 absolute left-0"
          >
            <SidebarIcon size={28} />
          </button>
        )}
      </div>
      <div className={`flex flex-row gap-2 items-center transition-opacity duration-300 ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100'}`}>
        {suiteLauncher && (
          <SuiteLauncher
            suiteArray={suiteLauncher?.suiteArray}
            soonText={suiteLauncher?.soonText}
            className={`text-gray-80 ${suiteLauncher?.className}`}
            align="left"
          />
        )}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="flex items-center justify-center text-gray-80 hover:text-gray-90"
          >
            <SidebarIcon size={28} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SidenavHeader;
