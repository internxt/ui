import Skeleton from '../../feedback/skeleton/Skeleton';
import { SidenavStorageProps } from './Sidenav';

const SidenavStorage = ({
  usage,
  limit,
  percentage,
  onUpgradeClick,
  upgradeLabel,
  isLoading = false,
  barClassName = 'bg-gray-60',
  containerClassName,
  advertisement,
}: SidenavStorageProps): JSX.Element => (
  <div className={`flex flex-col w-full gap-2.5 p-3${containerClassName ? ` ${containerClassName}` : ''}`}>
    {advertisement}
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-row items-center gap-2">
        {isLoading ? (
          <Skeleton />
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
        className={`${barClassName} rounded-full`}
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  </div>
);

export default SidenavStorage;
