import { CaretDown, DotsThreeVertical, FunnelSimple } from '@phosphor-icons/react';
import Checkbox from '../../checkbox/Checkbox';
import Input from '../../input/Input';
import { Message } from './components/Message';
import { emailMocks, EmailProps } from '../mocks';
import { MessageSkeleton } from './components/MessageSkeleton';

interface TrayProps {
  mails: EmailProps[];
  selectedEmails: string[];
  loading: boolean;
  checked: boolean;
  activeEmail: string;
  handleSelectAll: () => void;
  onMailSelected: (id: string) => void;
}

export const Tray = ({
  mails,
  loading,
  checked,
  selectedEmails,
  activeEmail,
  handleSelectAll,
  onMailSelected,
}: TrayProps) => {
  return (
    <div className="flex flex-col w-full max-w-[400px] h-screen border border-gray-5">
      <div className="flex flex-col gap-3 pt-6 pb-3 px-5 w-full">
        <Input variant="search" className="bg-gray-5 rounded-lg" placeholder="Search" />
        <div className="flex flex-row justify-between w-full gap-2.5">
          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-1 items-center">
              <Checkbox
                indeterminate={selectedEmails.length > 0 && selectedEmails.length < emailMocks.basicEmails.length}
                checked={checked}
                onClick={handleSelectAll}
              />
              <CaretDown size={14} className="text-gray-60" weight="fill" />
            </div>
            <p className="text-xl font-semibold text-gray-100">Inbox</p>
          </div>
          <div className="flex flex-row gap-4">
            <FunnelSimple size={24} className="text-gray-100" />
            <DotsThreeVertical size={24} className="text-gray-100" />
          </div>
        </div>
      </div>
      <div className="border w-full px-5 flex border-gray-10" />
      <div className="overflow-y-scroll">
        {loading ? (
          <>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <MessageSkeleton />
                </div>
              ))}
          </>
        ) : (
          <>
            {mails.map((email) => (
              <div key={email.id} className="flex items-center w-full flex-col">
                <Message email={email} active={checked || activeEmail === email.id} onClick={onMailSelected} />
                <div className="w-full flex px-5">
                  <div className="border w-full border-gray-10" />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
