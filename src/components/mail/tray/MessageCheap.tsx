import { Avatar } from '@/components/avatar';

interface MessageCheapProps {
  email: {
    id: string;
    from: {
      name: string;
      avatar: string;
    };
    subject: string;
    createdAt: string;
    body: string;
    read: boolean;
  };
  active?: boolean;
  selected?: boolean;
  onClick: (id: string) => void;
}

export const MessageCheap = ({ email, active, selected, onClick }: MessageCheapProps) => {
  const isHighlighted = active || selected;

  return (
    <button
      onClick={() => onClick(email.id)}
      className={`flex flex-col border-b border-gray-10 text-left gap-2 w-full py-3 px-5 ${isHighlighted ? 'bg-primary/10' : ''}`}
    >
      <div className="flex flex-row w-full gap-2">
        <Avatar fullName={email.from.name} src={email.from.avatar} size={'xxs'} />
        <div className="flex flex-col w-full">
          <div className={`flex flex-row w-full justify-between ${isHighlighted ? 'text-primary' : ''}`}>
            <div className="flex flex-row gap-1 w-full max-w-[150px] items-center">
              {!email.read && <div className="h-2 w-2 rounded-full bg-primary" />}
              <p className="font-semibold truncate">{email.from.name}</p>
            </div>
            <div>
              <p className={`text-sm font-medium ${isHighlighted ? 'text-primary' : 'text-gray-50'}`}>
                {email.createdAt}
              </p>
            </div>
          </div>
          <p className={`text-sm font-semibold ${isHighlighted ? 'text-primary' : ''}`}>{email.subject}</p>
          <p className={`text-sm ${isHighlighted ? 'text-primary/80' : 'text-gray-50'}`}>{email.body}</p>
        </div>
      </div>
    </button>
  );
};
