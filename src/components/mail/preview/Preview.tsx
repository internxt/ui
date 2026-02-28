import { EmailProps } from '../mocks';
import { ActionBar } from './components/ActionBar';
import { Header } from './components/Header';
import { MessageInbox } from './components/MessageInbox';
import { NewMessages } from './components/states/NewMessages';
import { EmptyMessages } from './components/states/NoMessages';

interface PreviewProps {
  isFetchingMails: boolean;
  mailSelected?: EmailProps;
  newMessagesCount?: number;
}

export const Preview = ({ mailSelected, isFetchingMails, newMessagesCount }: PreviewProps) => {
  return (
    <div className="flex flex-col max-w-[640px] gap-2 p-5 w-full h-full">
      <div className="flex flex-col w-full">
        <ActionBar isLoading={isFetchingMails} />
        {mailSelected && (
          <Header
            from={mailSelected.from}
            to={mailSelected.to}
            cc={mailSelected.cc}
            timestamp={mailSelected.timestamp}
          />
        )}
      </div>
      <div className="border w-full border-gray-5" />
      {!isFetchingMails && !mailSelected && newMessagesCount && newMessagesCount > 0 && (
        <NewMessages newMessagesCount={newMessagesCount} />
      )}
      {!isFetchingMails && !mailSelected && newMessagesCount && newMessagesCount === 0 && <EmptyMessages />}
      {!isFetchingMails && mailSelected && <MessageInbox body={mailSelected.body} subject={mailSelected.subject} />}
    </div>
  );
};
