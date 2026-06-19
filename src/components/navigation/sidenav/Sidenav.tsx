import { ReactNode, useEffect, useRef, useState } from 'react';
import { WarningIcon } from '@phosphor-icons/react';
import SidenavOptions, { SidenavOption } from './SidenavOptions';
import SidenavHeader from './SidenavHeader';
import SidenavStorage from './SidenavStorage';

export interface SidenavHeaderProps {
  logo: string;
  title: string;
  onClick: () => void;
  className?: string;
}

export interface SidenavStorageProps {
  usage: string;
  limit: string;
  percentage: number;
  onUpgradeClick: () => void;
  upgradeLabel?: string;
  isLoading?: boolean;
  barClassName?: string;
  containerClassName?: string;
  advertisement?: ReactNode;
}

export interface SidenavProps {
  header: SidenavHeaderProps;
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
  storage?: SidenavStorageProps;
  notification?: {
    message: string;
    actionLabel: string;
    onAction: () => void;
    type?: 'warning';
  };
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
 * @property {object} notification - Optional structured notification rendered above the storage section (hidden when collapsed). Accepts message, actionLabel, onAction, and an optional type ('warning').
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
  notification,
  onToggleCollapse,
}: SidenavProps) => {
  const [showContent, setShowContent] = useState(!isCollapsed);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isCollapsed) {
      setShowContent(false);
    } else {
      timerRef.current = setTimeout(() => setShowContent(true), 300);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isCollapsed]);

  return (
    <div
      className={`relative flex flex-col p-2 h-full justify-between bg-gray-1 border-r border-gray-10 transition-all duration-300 group ${
        isCollapsed ? 'w-[60px]' : 'w-64'
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

        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="relative">
            {!isCollapsed && <div className="transition-opacity duration-300 opacity-100">{primaryAction}</div>}
            {isCollapsed && <div className="transition-opacity duration-300 opacity-100">{collapsedPrimaryAction}</div>}
          </div>
          <SidenavOptions options={options} isCollapsed={isCollapsed} showSubsections={showSubsections} />
        </div>
      </div>

      {(notification || storage) && showContent && (
        <div className="flex flex-col">
          {notification && (
            <div className="px-2 pb-2">
              <div className="flex gap-1.5 items-start p-3 rounded-lg bg-yellow/10 border border-yellow/20">
                <WarningIcon className="size-5 shrink-0 text-yellow-dark" weight="fill" />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-xs leading-tight text-gray-100">{notification.message}</p>
                  <button
                    type="button"
                    onClick={notification.onAction}
                    className="self-start text-xs font-medium text-primary hover:underline"
                  >
                    {notification.actionLabel}
                  </button>
                </div>
              </div>
            </div>
          )}
          {storage && (
            <SidenavStorage
              usage={storage.usage}
              limit={storage.limit}
              percentage={storage.percentage}
              onUpgradeClick={storage.onUpgradeClick}
              upgradeLabel={storage.upgradeLabel}
              isLoading={storage.isLoading}
              barClassName={storage.barClassName}
              containerClassName={storage.containerClassName}
              advertisement={storage.advertisement}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Sidenav;
