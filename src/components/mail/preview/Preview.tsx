import { EmailProps } from '../mocks';
import { ActionBar } from './components/ActionBar';
import { Header } from './components/Header';
import { MessageInbox } from './components/MessageInbox';

interface PreviewProps {
  email: EmailProps;
}

export const Preview = ({ email }: PreviewProps) => {
  const { from, to, cc, timestamp, body, subject } = email;
  return (
    <div className="flex flex-col max-w-[640px] p-5 w-full">
      <div className="flex flex-col w-full">
        <ActionBar />
        <Header from={from} to={to} cc={cc} timestamp={timestamp} />
      </div>
      <div className="border w-full border-gray-5" />
      <MessageInbox body={body} subject={subject} />
    </div>
  );
};
