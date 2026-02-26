import { ReactNode } from 'react';
import SidenavOptions, { SidenavOption } from './SidenavOptions';
import SidenavHeader from './SidenavHeader';
import SidenavStorage from './SidenavStorage';

export interface SidenavHeader {
  logo: string;
  title: string;
  onClick: () => void;
  className?: string;
}

export interface SidenavStorage {
  usage: string;
  limit: string;
  percentage: number;
  onUpgradeClick: () => void;
  upgradeLabel?: string;
  isLoading?: boolean;
}

export interface SidenavProps {
  header: SidenavHeader;
  primaryAction?: ReactNode;
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
  collapsedPrimaryAction?: ReactNode;
  options: SidenavOption[];
  showSubsections?: boolean;
  isCollapsed?: boolean;
  storage?: SidenavStorage;
  onToggleCollapse?: () => void;
}

/**
 * Sidenav component
 *
 * A custom sidenav component that provides a sidebar with options for navigation and interaction.
 *
 * @property {SidenavHeader} header - Header configuration with logo, title, and onClick handler
 * @property {ReactNode} primaryAction - The primary action displayed at the top of the sidenav
 * @property {object} suiteLauncher - The suite launcher configuration
 * @property {ReactNode} collapsedPrimaryAction - The primary action displayed when the sidenav is collapsed
 * @property {SidenavOption[]} options - An array of options to be displayed in the sidenav. Each option can specify an 'as' prop to use a custom component (e.g., NavLink)
 * @property {boolean} showSubsections - Determines whether to display the subsections of the sidenav
 * @property {boolean} isCollapsed - Determines whether the sidenav is collapsed or not
 * @property {SidenavStorage} storage - The storage information displayed at the bottom of the sidenav
 * @property {() => void} onToggleCollapse - A callback function triggered when the collapse button is clicked
 */
const Sidenav = ({
  header,
  primaryAction,
  suiteLauncher,
  collapsedPrimaryAction,
  options,
  showSubsections,
  isCollapsed = false,
  storage,
  onToggleCollapse,
}: SidenavProps) => {
  return (
    <div
      className={`relative flex flex-col p-2 h-full justify-between bg-gray-1 border-r border-gray-10 transition-all duration-300 group ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col">
        <SidenavHeader
          logo={header.logo}
          title={header.title}
          onClick={header.onClick}
          isCollapsed={isCollapsed}
          onToggleCollapse={onToggleCollapse}
          suiteLauncher={suiteLauncher}
          className={header.className}
        />

        <div className="flex flex-col gap-4">
          {isCollapsed ? collapsedPrimaryAction : primaryAction}
          <SidenavOptions options={options} isCollapsed={isCollapsed} showSubsections={showSubsections} />
        </div>
      </div>

      {!isCollapsed && storage && (
        <SidenavStorage
          usage={storage.usage}
          limit={storage.limit}
          percentage={storage.percentage}
          onUpgradeClick={storage.onUpgradeClick}
          upgradeLabel={storage.upgradeLabel}
          isLoading={storage.isLoading}
        />
      )}
    </div>
  );
};

export default Sidenav;
