export const MessageCheapSkeleton = () => (
  <div className={'flex flex-col text-left gap-2 w-full py-3 px-5 border-b border-gray-5'}>
    <div className="flex flex-row w-full gap-2">
      <div className="flex flex-col h-8 w-8 rounded-full animate-pulse bg-gray-10" />
      <div className="flex flex-col gap-1 w-full">
        <div className={'flex flex-row w-full justify-between'}>
          <div className="flex rounded-md w-1/3 h-3 bg-gray-10 animate-pulse" />
          <div className="flex rounded-md w-1/4 h-3 bg-gray-10 animate-pulse" />
        </div>
        <div className="flex rounded-md w-1/2 h-3 bg-gray-10 animate-pulse" />
        <div className="flex rounded-md w-full h-3 bg-gray-10 animate-pulse" />
      </div>
    </div>
  </div>
);
