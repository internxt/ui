import { Avatar } from '../../../avatar/Avatar';
import { EmailProps, formatTimestamp } from '../../mocks';

interface MessageProps {
  email: Pick<EmailProps, 'read' | 'id' | 'from' | 'subject' | 'timestamp' | 'body'>;
  onClick: (id: string) => void;
  active?: boolean;
}

export const Message = ({ email, active, onClick }: MessageProps) => {
  return (
    <button
      onClick={() => onClick(email.id)}
      className={`flex flex-col text-left gap-2 w-full py-3 px-5 ${active ? 'bg-primary' : ''}`}
    >
      <div className="flex flex-row w-full gap-2">
        <Avatar fullName={email.from.name} src={email.from.avatar} size={'xxs'} className={active ? 'bg-white' : ''} />
        <div className="flex flex-col w-full">
          <div className={`flex flex-row w-full justify-between ${active ? 'text-white' : ''}`}>
            <div className="flex flex-row gap-1 w-full max-w-[150px] items-center">
              {email.read && <div className="h-2 w-2 rounded-full bg-primary" />}
              <p className="font-semibold truncate">{email.from.name}</p>
            </div>
            <div>
              <p className={`text-sm font-medium ${active ? 'text-white/80' : 'text-gray-80'}`}>
                {formatTimestamp(email.timestamp as string)}
              </p>
            </div>
          </div>
          <p className={`text-sm font-semibold ${active ? 'text-white' : ''}`}>{email.subject}</p>
          <p className={`text-sm ${active ? 'text-white/80' : 'text-gray-80'}`}>{email.body}</p>
        </div>
      </div>
    </button>
  );
};
