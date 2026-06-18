import { CloudWarningIcon, XIcon } from '@phosphor-icons/react';
import React, { ReactNode } from 'react';
import { Button } from '../../../input/button';

export interface UsageWarningBannerProps {
  title: string;
  description: ReactNode;
  usage: string;
  limit: string;
  percentage: number;
  upgradeLabel: string;
  closeButtonLabel: string;
  onUpgradeClick: () => void;
  onCloseButtonClick: () => void;
  barClassName?: string;
  isLoading?: boolean;
}

const UsageWarningBanner: React.FC<UsageWarningBannerProps> = ({
  title,
  description,
  usage,
  limit,
  percentage,
  upgradeLabel,
  closeButtonLabel,
  onUpgradeClick,
  onCloseButtonClick,
  barClassName = 'bg-yellow-60',
  isLoading = false,
}) => (
  <div className="flex flex-col w-full px-4 py-3 rounded-xl bg-alert border-alert-dark border h-min">
    <div className="flex flex-col w-full gap-1">
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-row items-center gap-2">
          <CloudWarningIcon weight="fill" className="size-5 text-yellow-60" />
          <p className="text-sm font-semibold text-gray-80">{title}</p>
        </span>
        <button
          type="button"
          aria-label={closeButtonLabel}
          onClick={onCloseButtonClick}
          className="flex items-center justify-center"
        >
          <XIcon className="size-5 text-gray-53 cursor-pointer" />
        </button>
      </div>
      <div className="text-xs font-medium text-gray-52">{description}</div>
    </div>
    <div className="flex flex-row items-center gap-6 h-10">
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex w-full h-1.5 bg-gray-10 rounded-full">
          <div className={`${barClassName} h-full rounded-full`} style={{ width: `${percentage}%` }} />
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

export default UsageWarningBanner;
