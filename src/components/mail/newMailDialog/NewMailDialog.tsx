import { Paperclip, X } from '@phosphor-icons/react';
import { Button } from '../../button/Button';
import Input from '../../input/Input';
import { ActionBar } from './components/ActionBar';
import TextArea from '../../textArea/TextArea';

interface NewMailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  onPrimaryAction: () => void;
  onMailChange: () => void;
  onSecondaryAction: () => void;
  isLoading: boolean;
  primaryActionColor?: string;
}

export const NewMailDialog = ({
  isOpen,
  title,
  isLoading,
  primaryActionColor = 'primary',
  onClose,
  onMailChange,
  onPrimaryAction,
  onSecondaryAction,
}: NewMailDialogProps) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-gray-100/50 transition-opacity
     duration-150 dark:bg-black/75
    `}
        onClick={onClose}
        data-testid="dialog-overlay"
      ></div>

      <div
        className={`absolute
      left-1/2
      top-1/2
      w-full
      max-w-[720px]
      -translate-x-1/2
      -translate-y-1/2
      transform rounded-2xl
      bg-surface p-5
      transition-all
      duration-150
      dark:bg-gray-1
      `}
      >
        <div className="flex flex-col space-y-2">
          <div className=" flex flex-row justify-between">
            <p className="text-lg font-medium text-gray-100">{title}</p>
            <X onClick={onClose} />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="font-medium max-w-[64px] w-full text-gray-100">To</p>
            <Input className="w-full" />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="font-medium max-w-[64px] w-full text-gray-100">Subject</p>
            <Input className="w-full" />
          </div>
          <div className="w-full flex border border-gray-5" />
          <ActionBar />
        </div>
        <TextArea className={'!border-none !ring-0 pt-4 min-h-[300px]'} onChange={onMailChange} />
        <div className="mt-5 flex justify-end space-x-2">
          <Button variant="ghost" onClick={onSecondaryAction} disabled={isLoading}>
            <Paperclip size={24} />
          </Button>
          <Button
            onClick={onPrimaryAction}
            loading={isLoading}
            variant={primaryActionColor === 'primary' ? 'primary' : 'destructive'}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
