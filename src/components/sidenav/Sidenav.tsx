import { Icon, IconWeight, DotsNineIcon } from '@phosphor-icons/react';
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
}

export interface SidenavStorage {
  used: string;
  total: string;
  percentage: number;
  onUpgradeClick: () => void;
  upgradeLabel: string;
}

export interface SidenavProps {
  header: SidenavHeader;
  primaryAction?: ReactNode;
  options: SidenavOption[];
  activeOptionId: number;
  showSubsections: boolean;
  storage?: SidenavStorage;
  onOptionClick: (optionId: number, isSubsection: boolean) => void;
  onMenuClick: () => void;
}

export const Sidenav = ({
  header,
  primaryAction,
  options,
  activeOptionId,
  showSubsections,
  storage,
  onOptionClick,
  onMenuClick,
}: SidenavProps) => {
  return (
    <div className="flex flex-col p-2 w-full h-full justify-between max-w-[256px] bg-gray-1">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full p-5">
          <div className="flex flex-row gap-2 items-center">
            <img src={header.logo} width={28} alt={header.title} />
            <p className="text-xl font-medium text-gray-100">{header.title}</p>
          </div>
          <button onClick={onMenuClick}>
            <DotsNineIcon size={28} className="text-gray-50 active:text-gray-70" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {primaryAction}
          <div className="flex flex-col w-full">
            {options.map((option) => {
              if (option.subsection && !showSubsections) {
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
                >
                  <div className={'flex flex-row px-2.5 p-2 w-full justify-between items-start '}>
                    <div className={`flex flex-row gap-3 items-center ${isActive ? 'text-primary' : 'text-gray-60'}`}>
                      <option.icon size={option.iconSize ?? 20} weight={option.weight ?? 'regular'} />
                      <p>{option.title}</p>
                    </div>
                    {option.notifications && (
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
      {storage && (
        <div className="flex flex-col w-full gap-2.5">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row items-center gap-2">
              <p className="text-gray-60 text-sm font-semibold">{storage.used}</p>
              <p className="text-gray-60 text-sm">/</p>
              <p className="text-gray-60 text-sm">{storage.total}</p>
            </div>
            <button
              className="text-primary text-sm hover:text-primary-dark font-semibold"
              onClick={storage.onUpgradeClick}
            >
              {storage.upgradeLabel}
            </button>
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
};
