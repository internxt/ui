interface SidenavStorageProps {
  usage: string;
  limit: string;
  percentage: number;
  onUpgradeClick: () => void;
  upgradeLabel?: string;
  isLoading?: boolean;
}

const SidenavStorage = ({
  usage,
  limit,
  percentage,
  onUpgradeClick,
  upgradeLabel,
  isLoading = true,
}: SidenavStorageProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-2.5 px-2 pb-5">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row items-center gap-2">
          {isLoading ? (
            <div className="flex flex-row items-center gap-2">
              <div className="h-3 w-8 rounded-lg bg-gray-5 animate-pulse" />
              <div className="h-3 w-2 rounded-lg bg-gray-5 animate-pulse" />
              <div className="h-3 w-8 rounded-lg bg-gray-5 animate-pulse" />
            </div>
          ) : (
            <>
              <p className="text-gray-60 text-sm font-semibold">{usage}</p>
              <p className="text-gray-60 text-sm">/</p>
              <p className="text-gray-60 text-sm">{limit}</p>
            </>
          )}
        </div>
        {upgradeLabel && (
          <button className="text-primary text-sm hover:text-primary-dark font-semibold" onClick={onUpgradeClick}>
            {upgradeLabel}
          </button>
        )}
      </div>
      <div className="flex w-full h-1.5 bg-gray-10 rounded-full">
        <div
          className="bg-gray-60 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default SidenavStorage;
