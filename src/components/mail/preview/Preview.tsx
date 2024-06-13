import { EmailProps } from '../mocks';
import { ActionBar } from './components/ActionBar';
import { Header } from './components/Header';
import { MessageInbox } from './components/MessageInbox';
import { NewMessages } from './components/states/NewMessages';
import { EmptyMessages } from './components/states/NoMessages';

interface PreviewProps {
  mailSelected?: EmailProps;
  newMessagesCount?: number;
}

export const Preview = ({ mailSelected, newMessagesCount }: PreviewProps) => {
  return (
    <div className="flex flex-col max-w-[640px] p-5 w-full">
      <div className="flex flex-col w-full">
        <ActionBar />
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
      {!mailSelected && newMessagesCount && newMessagesCount > 0 && <NewMessages newMessagesCount={newMessagesCount} />}
      {!mailSelected && newMessagesCount && newMessagesCount === 0 && <EmptyMessages />}
      {mailSelected && <MessageInbox body={mailSelected.body} subject={mailSelected.subject} />}
    </div>
  );
};
