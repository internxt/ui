import { CloudWarningIcon } from '@phosphor-icons/react';

interface SidenavStorageProps {
  usage: string;
  limit: string;
  percentage: number;
  onUpgradeClick: () => void;
  upgradeLabel?: string;
  isLoading?: boolean;
  advertisementMessage?: string;
}

type StorageLevel = 'normal' | 'low warning' | 'middle warning' | 'high warning';

const getStorageLevel = (percentage: number): StorageLevel => {
  if (percentage >= 95) return 'high warning';
  if (percentage >= 80) return 'middle warning';
  if (percentage >= 60) return 'low warning';
  return 'normal';
};

const STORAGE_LEVEL_STYLES: Record<StorageLevel, { bar: string; container: string }> = {
  normal: { bar: 'bg-gray-60', container: '' },
  'low warning': { bar: 'bg-yellow-60', container: '' },
  'middle warning': { bar: 'bg-orange-60', container: '' },
  'high warning': { bar: 'bg-danger', container: 'bg-alert rounded-xl border border-alert-1 p-3 gap-2' },
};


const SidenavStorage = ({
  usage,
  limit,
  percentage,
  onUpgradeClick,
  upgradeLabel,
  isLoading = true,
  advertisementMessage,
}: SidenavStorageProps): JSX.Element => {
  const level = getStorageLevel(percentage);
  const styles = STORAGE_LEVEL_STYLES[level];
  const showWarning = level === 'middle warning' || level === 'high warning';

  return (
    <div className={`flex flex-col w-full gap-2.5 px-2 pb-5 ${styles.container}`}>
      {showWarning && advertisementMessage && (
        <div className="flex flex-row gap-0.5 items-center">
          <CloudWarningIcon
            className="size-5 inline-block text-yellow-60 mr-1"
            weight={level === 'high warning' ? 'fill' : 'regular'}
          />
          <p className="text-sm font-semibold">{advertisementMessage}</p>
        </div>
      )}
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
          className={`${styles.bar} rounded-full`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default SidenavStorage;
