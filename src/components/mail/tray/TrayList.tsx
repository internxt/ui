import { InfiniteScroll } from '@/components/infiniteScroll';
import { MessageCheapSkeleton } from './MessageCheapSkeleton';
import { MessageCheap } from './MessageCheap';

interface TrayListProps {
  mails: {
    id: string;
    from: {
      name: string;
      avatar: string;
    };
    subject: string;
    createdAt: string;
    body: string;
    read: boolean;
  }[];
  selectedEmails?: string[];
  loading: boolean;
  checked: boolean;
  activeEmail: string;
  hasMoreItems?: boolean;
  onMailSelected: (id: string) => void;
  onLoadMore?: () => void;
}

export const TrayList = ({
  mails,
  selectedEmails = [],
  loading,
  checked,
  activeEmail,
  hasMoreItems = false,
  onMailSelected,
  onLoadMore,
}: TrayListProps) => {
  const loader = (
    <div className="flex flex-col">
      {new Array(3).fill(0).map((_, index) => (
        <MessageCheapSkeleton key={index} />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-[400px] min-w-[200px] max-w-[400px] h-screen">
      <div id="tray-scroll-container" className="overflow-y-auto w-full">
        {loading ? (
          <>
            {new Array(8).fill(0).map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <MessageCheapSkeleton />
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col">
            {mails.length === 0 ? (
              <div className="w-full items-center justify-center">
                <p className="text-gray-60 text-center py-6">No emails</p>
              </div>
            ) : (
              <InfiniteScroll
                handleNextPage={onLoadMore ?? (() => {})}
                hasMoreItems={hasMoreItems}
                loader={loader}
                scrollableTarget="tray-scroll-container"
              >
                {mails.map((email) => (
                  <div key={email.id} className="flex items-center w-full flex-col">
                    <MessageCheap
                      email={email}
                      active={activeEmail === email.id}
                      selected={checked || selectedEmails.includes(email.id)}
                      onClick={onMailSelected}
                    />
                  </div>
                ))}
              </InfiniteScroll>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
