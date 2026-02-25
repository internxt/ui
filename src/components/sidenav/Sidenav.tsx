import { Icon, IconWeight, DotsNineIcon, CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { ReactNode } from 'react';

export interface SidenavOption {
  id: number;
  title: string;
  icon: Icon;
  iconSize?: number;
  weight?: IconWeight;
  notifications?: number;
  subsection?: boolean;
}

export interface SidenavHeader {
  logo: string;
  title: string;
  onClick: () => void;
}

export interface SidenavStorage {
  used: string;
  total: string;
  percentage: number;
  onUpgradeClick: () => void;
  upgradeLabel?: string;
}

export interface SidenavProps {
  header: SidenavHeader;
  primaryAction?: ReactNode;
  collapsedPrimaryAction?: ReactNode;
  options: SidenavOption[];
  activeOptionId: number;
  showSubsections: boolean;
  isCollapsed?: boolean;
  storage?: SidenavStorage;
  onOptionClick: (optionId: number, isSubsection: boolean) => void;
  onMenuClick: () => void;
  onToggleCollapse?: () => void;
}

/**
 * Sidenav component
 *
 * A custom sidenav component that provides a sidebar with options for navigation and interaction.
 *
 * @property {SidenavHeader} header
 * - Determines whether to display the header section of the sidenav.
 *
 * @property {ReactNode} primaryAction
 * - The primary action displayed at the top of the sidenav.
 *
 * @property {ReactNode} collapsedPrimaryAction
 * - The primary action displayed when the sidenav is collapsed.
 *
 * @property {SidenavOption[]} options
 * - An array of options to be displayed in the sidenav.
 *
 * @property {number} activeOptionId
 * - The ID of the currently active option in the sidenav.
 *
 * @property {boolean} showSubsections
 * - Determines whether to display the subsections of the sidenav.
 *
 * @property {boolean} isCollapsed
 * - Determines whether the sidenav is collapsed or not.
 *
 * @property {SidenavStorage} storage
 * - The storage information displayed at the bottom of the sidenav.
 *
 * @property {(optionId: number, isSubsection: boolean) => void} onOptionClick
 * - A callback function triggered when an option in the sidenav is clicked.
 *
 * @property {() => void} onMenuClick
 * - A callback function triggered when the menu button is clicked.
 *
 * @property {() => void} onToggleCollapse
 * - A callback function triggered when the collapse button is clicked.
 */
export const Sidenav = ({
  header,
  primaryAction,
  collapsedPrimaryAction,
  options,
  activeOptionId,
  showSubsections,
  isCollapsed = false,
  storage,
  onOptionClick,
  onMenuClick,
  onToggleCollapse,
}: SidenavProps) => (
  <div
    className={`relative flex flex-col p-2 h-full justify-between bg-gray-1 border-r border-gray-10 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}
  >
    {onToggleCollapse && (
      <button
        onClick={onToggleCollapse}
        className="absolute top-1/2 -right-3 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-surface border border-gray-10 text-gray-50 hover:text-gray-70 hover:bg-gray-5 shadow-sm z-10"
      >
        {isCollapsed ? <CaretRightIcon size={14} /> : <CaretLeftIcon size={14} />}
      </button>
    )}
    <div className="flex flex-col">
      <div className={`flex flex-row justify-between w-full p-5 ${isCollapsed ? 'px-2 justify-center' : ''}`}>
        <button className="flex flex-row gap-2 items-center" onClick={header.onClick}>
          <img src={header.logo} width={28} alt={header.title} />
          {!isCollapsed && <p className="text-xl font-medium text-gray-100">{header.title}</p>}
        </button>
        {!isCollapsed && (
          <button onClick={onMenuClick}>
            <DotsNineIcon size={28} className="text-gray-50 active:text-gray-70" />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {isCollapsed ? collapsedPrimaryAction : primaryAction}
        <div className="flex flex-col w-full">
          {options.map((option) => {
            if (option.subsection && !showSubsections) {
              return null;
            }

            if (isCollapsed && option.subsection) {
              return null;
            }

            const isActive = activeOptionId === option.id;

            return (
              <button
                key={option.id}
                className={`flex w-full flex-col focus-visible:bg-gray-10 rounded-lg ${
                  isActive ? 'bg-primary/20' : 'hover:bg-gray-5'
                } ${option.subsection ? 'pl-5' : ''}`}
                onClick={() => onOptionClick(option.id, !!option.subsection)}
                title={isCollapsed ? option.title : undefined}
              >
                <div
                  className={`flex flex-row px-2.5 py-2 w-full items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
                >
                  <div className={`flex flex-row gap-3 items-center ${isActive ? 'text-primary' : 'text-gray-60'}`}>
                    <option.icon size={option.iconSize ?? 20} weight={option.weight ?? 'regular'} />
                    {!isCollapsed && <p>{option.title}</p>}
                  </div>
                  {!isCollapsed && option.notifications && (
                    <div className={`flex rounded-full px-1.5 py-0.5 ${isActive ? 'bg-primary' : 'bg-gray-40'}`}>
                      <p className="text-white text-xs font-medium">{option.notifications}</p>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
    {!isCollapsed && storage && (
      <div className="flex flex-col w-full gap-2.5">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="text-gray-60 text-sm font-semibold">{storage.used}</p>
            <p className="text-gray-60 text-sm">/</p>
            <p className="text-gray-60 text-sm">{storage.total}</p>
          </div>
          {storage.upgradeLabel && (
            <button
              className="text-primary text-sm hover:text-primary-dark font-semibold"
              onClick={storage.onUpgradeClick}
            >
              {storage.upgradeLabel}
            </button>
          )}
        </div>
        <div className="flex w-full h-1.5 bg-gray-10 rounded-full">
          <div
            className="bg-gray-60 rounded-full"
            style={{
              width: `${storage.percentage}%`,
            }}
          />
        </div>
      </div>
    )}
  </div>
);
