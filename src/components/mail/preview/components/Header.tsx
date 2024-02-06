import { useState } from 'react';
import { Avatar } from '../../../avatar/Avatar';
import { EmailProps, formatTimestamp } from '../../mocks';
import { UserCheap } from '../../userCheap/UserCheap';

export const Header = ({ from, to, cc, timestamp }: Pick<EmailProps, 'from' | 'to' | 'cc' | 'timestamp'>) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row w-full justify-between py-5">
      <div className="flex flex-row gap-2">
        <Avatar fullName={from.name} src={from.avatar} diameter={40} />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium text-gray-100">{from.name}</p>
          <div className="flex flex-row items-center gap-1">
            <p className="text-sm font-medium text-gray-100">To:</p>
            <div className="flex flex-row items-center gap-1">
              {to.map((email, index) => (
                <div
                  key={index}
                  className="relative bg-gray-5 flex px-2 py-0.5 rounded-lg"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <p className="text-sm font-medium text-gray-60">{email.name.split(' ')[0]}</p>
                  {hoveredIndex === index && (
                    <div className="absolute top-full z-30 left-0 mt-2">
                      <UserCheap to={[email]} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-sm font-medium text-gray-100">Cc:</p>
            <div className="flex flex-row items-center gap-1">
              {cc?.map((email, index) => (
                <div
                  key={index}
                  className="relative bg-gray-5 flex px-2 py-0.5 rounded-lg"
                  onMouseEnter={() => setHoveredIndex(index + to.length)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <p className="text-sm font-medium text-gray-60">{email.name.split(' ')[0]}</p>
                  {hoveredIndex === index + to.length && (
                    <div className="absolute top-full z-30 left-0 mt-2">
                      <UserCheap to={[email]} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-80">{formatTimestamp(timestamp as string)}</p>
      </div>
    </div>
  );
};
