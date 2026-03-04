import { Avatar } from '../../avatar/Avatar';
import { EmailProps } from '../mocks';

export const UserCheap = ({ to }: Pick<EmailProps, 'to'>) => {
  return (
    <div className="flex bg-white max-w-[300px] w-full border gap-2 items-center border-gray-1 rounded-lg flex-row p-2">
      <Avatar diameter={40} fullName={to[0].name} src={to[0].avatar} />
      <div className="flex flex-col gap-1">
        <p className="truncate font-medium">{to[0].name}</p>
        <p className="text-sm text-gray-50 truncate">{to[0].email}</p>
      </div>
    </div>
  );
};
