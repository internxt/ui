import { CloudWarningIcon, XIcon } from '@phosphor-icons/react';
import React from 'react';
import { Button } from '../../../input/button';

export interface UsageWarningBannerProps {
  usage: string;
  limit: string;
  percentage: number;
  titleLabel: string;
  descriptionLabelLine1: string;
  descriptionLabelLine2: string;
  upgradeLabel: string;
  onUpgradeClick: () => void;
  onCloseButtonClick: () => void;
  isLoading?: boolean;
  darkMode?: boolean;
}

type StorageLevel = 'low warning' | 'middle warning' | 'high warning';

const getStorageLevel = (percentage: number): StorageLevel => {
  if (percentage >= 95) return 'high warning';
  if (percentage >= 80) return 'middle warning';
  return 'low warning';
};

const STORAGE_LEVEL_STYLES: Record<StorageLevel, { bar: string }> = {
  'low warning': { bar: 'bg-yellow-60' },
  'middle warning': { bar: 'bg-orange-60' },
  'high warning': { bar: 'bg-danger' },
};

/**
 * Renders text marking the segments wrapped in `**...**` as bold.
 */
const renderWithBold = (text: string): React.ReactNode =>
  text.split(/(\*\*[^*]+\*\*)/g).map((segment, index) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={index}>{segment.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={index}>{segment}</React.Fragment>;
  });

const UsageWarningBanner: React.FC<UsageWarningBannerProps> = ({
  usage,
  limit,
  percentage,
  titleLabel,
  descriptionLabelLine1,
  descriptionLabelLine2,
  upgradeLabel,
  onUpgradeClick,
  onCloseButtonClick,
  isLoading = true,
}) => {
  const level = getStorageLevel(percentage);
  const styles = STORAGE_LEVEL_STYLES[level];

  return (
    <div className="flex flex-col w-full px-4 py-3 rounded-xl bg-alert border-alert-1 border h-min">
      <div className="flex flex-col w-full gap-1">
        <div className="flex flex-row justify-between items-center">
          <span className="flex flex-row items-center gap-2">
            <CloudWarningIcon weight="fill" className="size-5 text-yellow-60" />
            <p className="text-sm font-semibold">{titleLabel}</p>
          </span>
          <XIcon className="size-5 text-gray-54 cursor-pointer" onClick={onCloseButtonClick} />
        </div>
        <span>
          <p className="text-xs font-medium text-gray-54 whitespace-nowrap">{renderWithBold(descriptionLabelLine1)}</p>
          <p className="text-xs font-medium text-gray-54 whitespace-nowrap">{renderWithBold(descriptionLabelLine2)}</p>
        </span>
      </div>
      <div className="flex flex-row items-center gap-6 h-10">
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex w-full h-1.5 bg-gray-10 rounded-full">
            <div className={`${styles.bar} h-full rounded-full`} style={{ width: `${percentage}%` }} />
          </div>
          {isLoading ? (
            <div className="flex flex-row items-center gap-2">
              <div className="h-3 w-8 rounded-lg bg-gray-5 animate-pulse" />
              <div className="h-3 w-2 rounded-lg bg-gray-5 animate-pulse" />
              <div className="h-3 w-8 rounded-lg bg-gray-5 animate-pulse" />
            </div>
          ) : (
            <span className="flex flex-row gap-1">
              <p className="text-gray-60 text-xs">{usage}</p>
              <p className="text-gray-60 text-xs">/</p>
              <p className="text-gray-60 text-xs">{limit}</p>
            </span>
          )}
        </div>
        <Button variant="secondary" size="medium" onClick={onUpgradeClick}>
          {upgradeLabel}
        </Button>
      </div>
    </div>
  );
};

export default UsageWarningBanner;
