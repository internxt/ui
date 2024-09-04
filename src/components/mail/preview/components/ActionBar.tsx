import {
  ArrowBendUpRight,
  Archive,
  ArrowBendDoubleUpLeft,
  ArrowBendUpLeft,
  EnvelopeSimple,
  Flag,
  FolderSimple,
  Trash,
  Gear,
  DotsThreeVertical,
  Printer,
  Info,
  WarningDiamond,
  WarningOctagon,
} from '@phosphor-icons/react';
import { Button } from '../../../button/Button';
import { Avatar } from '../../../avatar/Avatar';
import Dropdown from '../../../dropdown/Dropdown';

interface ActionBarProps {
  isLoading: boolean;
}

export const ActionBar = ({ isLoading }: ActionBarProps) => {
  const dropdownActions = [
    {
      name: 'Print',
      icon: Printer,
    },
    {
      name: 'View source',
      icon: Info,
    },
    {
      separator: true,
    },
    {
      name: 'Move to Spam',
      icon: WarningDiamond,
    },
    {
      name: 'Report phishing',
      icon: WarningOctagon,
    },
  ];

  return (
    <div className={`flex ${isLoading && 'opacity-40'} flex-row w-full items-center justify-between`}>
      <div className="flex flex-row items-center gap-5 w-full">
        <Button variant="ghost" className="w-10">
          <EnvelopeSimple size={24} />
        </Button>
        <div className="flex flex-row items-center gap-1">
          <Button className="w-10" variant="ghost">
            <Trash size={24} />
          </Button>
          <div className="border h-6 border-gray-10" />
          <Button className="w-10" variant="ghost">
            <Archive size={24} />
          </Button>
          <div className="border h-6 border-gray-10" />
          <Button className="w-10" variant="ghost">
            <FolderSimple size={24} />
          </Button>
        </div>
        <Button className="w-10" variant="ghost">
          <Flag size={24} />
        </Button>
        <div className="flex flex-row items-center gap-1">
          <Button className="w-10" variant="ghost">
            <ArrowBendUpLeft size={24} />
          </Button>
          <div className="border h-6 border-gray-10" />
          <Button className="w-10" variant="ghost">
            <ArrowBendDoubleUpLeft size={24} />
          </Button>
          <div className="border h-6 border-gray-10" />
          <Button className="w-10" variant="ghost">
            <ArrowBendUpRight size={24} />
          </Button>
        </div>
        <Dropdown
          children={<DotsThreeVertical size={24} />}
          classButton="flex items-center hover:bg-gray-5 p-2 rounded-lg"
          classMenuItems="relative"
          dropdownActionsContext={dropdownActions}
          openDirection="right"
        />
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Gear size={24} />
        <Avatar fullName="Xavi Abad" diameter={40} />
      </div>
    </div>
  );
};
