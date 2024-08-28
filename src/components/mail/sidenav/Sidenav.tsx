import {
  DotsNine,
  NotePencil,
  Tray,
  File,
  PaperPlaneTilt,
  Trash,
  CaretRight,
  WarningDiamond,
  Archive,
  IconWeight,
  CaretDown,
} from '@phosphor-icons/react';
import { Button } from '../../button/Button';
import { useState } from 'react';

const MAIL_OPTIONS = [
  {
    id: 0,
    title: 'Inbox',
    icon: Tray,
    notifications: 2,
  },
  {
    id: 1,
    title: 'Drafts',
    icon: File,
    notifications: 1,
  },
  {
    id: 2,
    title: 'Sent',
    icon: PaperPlaneTilt,
  },
  {
    id: 3,
    title: 'Trash',
    icon: Trash,
  },
  {
    id: 4,
    title: 'More',
    icon: CaretRight,
    activeIcon: CaretDown,
    iconSize: 14,
    weight: 'fill' as IconWeight,
  },
  {
    id: 5,
    title: 'Archive',
    icon: Archive,
    notifications: 10,
    iconSize: 20,
    subsection: true,
  },
  {
    id: 6,
    title: 'Spam',
    icon: WarningDiamond,
    notifications: 3,
    weight: 'regular' as IconWeight,
    subsection: true,
  },
];

export const Sidenav = ({ onNewMessageClicked }: { onNewMessageClicked: () => void }) => {
  const [active, setActive] = useState<number>(0);
  const [showSubsections, setShowSubsections] = useState(false);

  const handleClick = (optionId: number, isSubsection: boolean) => {
    if (isSubsection) {
      setActive(optionId);
      return;
    }

    if (optionId === 4) {
      setShowSubsections(!showSubsections);
    } else {
      setShowSubsections(false);
    }

    setActive(optionId);
  };

  return (
    <div className="flex flex-col p-2 w-full h-full justify-between max-w-[256px] bg-gray-1">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full p-5">
          <div className="flex flex-row gap-2 items-center">
            <img src="https://internxt.com/favicon.ico" width={28} />
            <p className="text-xl font-medium text-gray-100">Mail</p>
          </div>
          <button>
            <DotsNine size={28} className="text-gray-50 active:text-gray-70" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <Button className="flex flex-row items-center w-full gap-2" onClick={onNewMessageClicked}>
            <NotePencil size={24} />
            <p>New message</p>
          </Button>
          <div className="flex flex-col w-full">
            {MAIL_OPTIONS.map((option) => {
              if (option.subsection && !showSubsections) {
                return null;
              }

              return (
                <button
                  key={option.id}
                  className={`flex w-full flex-col active:bg-gray-10 focus-visible:bg-gray-10 rounded-lg ${
                    active === option.id ? 'bg-highlight/10' : 'hover:bg-gray-5'
                  } ${option.subsection ? 'pl-5' : ''}`}
                  onClick={() => handleClick(option.id, !!option.subsection)}
                >
                  <div className="flex flex-row px-2.5 py-2 w-full justify-between items-start">
                    <div
                      className={`flex flex-row gap-3 items-center ${
                        active === option.id ? 'text-gray-100' : 'text-gray-60'
                      }`}
                    >
                      {active === option.id && option.activeIcon ? (
                        <option.activeIcon size={option.iconSize ?? 20} weight={option.weight ?? 'regular'} />
                      ) : (
                        <option.icon size={option.iconSize ?? 20} weight={option.weight ?? 'regular'} />
                      )}
                      <p>{option.title}</p>
                    </div>
                    {option.notifications && (
                      <div
                        className={`flex rounded-full px-1.5 py-0.5 ${
                          active === option.id ? 'bg-primary' : 'bg-gray-40'
                        }`}
                      >
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
      <div className="flex flex-col w-full gap-2.5">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="text-gray-60 text-sm font-semibold">2.8 GB</p>
            <p className="text-gray-60 text-sm">/</p>
            <p className="text-gray-60 text-sm">4 GB</p>
          </div>
          <button className="text-primary text-sm hover:text-primary-dark font-semibold">Upgrade</button>
        </div>
        <div className="flex w-full h-1.5 bg-gray-10 rounded-full">
          <div
            className="bg-gray-60 rounded-full"
            style={{
              width: '40%',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
