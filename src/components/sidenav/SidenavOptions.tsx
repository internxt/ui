import { ComponentType, ReactNode } from 'react';
import { Icon } from '@phosphor-icons/react';
import SidenavItem from './SidenavItem';

export interface SidenavOption {
  label: string;
  icon: Icon;
  iconDataCy: string;
  isVisible: boolean;
  to?: string;
  isActive?: boolean;
  notifications?: number;
  onClick?: () => void;
  subsection?: boolean;
}

interface SidenavOptionsProps {
  options: SidenavOption[];
  isCollapsed: boolean;
  showSubsections?: boolean;
  LinkComponent?: ComponentType<{ to: string; className?: string; children: ReactNode }>;
}

const SidenavOptions = ({
  options,
  isCollapsed,
  showSubsections,
  LinkComponent,
}: SidenavOptionsProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      {options
        .filter((option) => option.isVisible)
        .map((option, index) => {
          if (option.subsection && !showSubsections) {
            return null;
          }

          if (isCollapsed && option.subsection) {
            return null;
          }

          return (
            <SidenavItem
              key={`${option.iconDataCy}-${index}`}
              label={option.label}
              Icon={option.icon}
              iconDataCy={option.iconDataCy}
              isActive={option.isActive}
              notifications={option.notifications}
              onClick={option.onClick}
              to={option.to}
              isCollapsed={isCollapsed}
              subsection={option.subsection}
              LinkComponent={LinkComponent}
            />
          );
        })}
    </div>
  );
};

export default SidenavOptions;
