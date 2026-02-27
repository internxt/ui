import { InfiniteScroll } from '@/components/infiniteScroll';
import { MessageCheapSkeleton } from './MessageCheapSkeleton';
import { MessageCheap } from './MessageCheap';
import { ReactNode } from 'react';

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
  emptyState?: ReactNode;
  onMailSelected: (id: string) => void;
  onLoadMore?: () => void;
}

/**
 *
 * @param {TrayListProps} TrayListProps - Props for the TrayList component
 * @prop {Array} TrayListProps.mails - An array of email objects
 *
 * @prop {string[]} TrayListProps.selectedEmails - An array of selected email IDs
 *
 * @prop {boolean} TrayListProps.loading - A boolean indicating loading state
 *
 * @prop {boolean} TrayListProps.checked - A boolean indicating whether all emails are checked
 *
 * @prop {string} TrayListProps.activeEmail - The ID of the currently active email
 *
 * @prop {boolean} TrayListProps.hasMoreItems - A boolean indicating whether there are more items to load
 *
 * @prop {ReactNode} TrayListProps.emptyState - A JSX element to display when there are no emails
 *
 * @prop {(id: string) => void} TrayListProps.onMailSelected - A function to handle email selection
 *
 * @prop {() => void} TrayListProps.onLoadMore - A function to load more emails
 *
 * @returns {JSX.Element} The rendered TrayList component
 */

export const TrayList = ({
  mails,
  selectedEmails = [],
  loading,
  checked,
  activeEmail,
  hasMoreItems = false,
  emptyState,
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
          <>
            {mails.length === 0 ? (
              <>{emptyState}</>
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
          </>
        )}
      </div>
    </div>
  );
};
