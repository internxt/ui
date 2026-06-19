import { default as React, ReactNode } from '../../../../../node_modules/react';
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
declare const UsageWarningBanner: React.FC<UsageWarningBannerProps>;
export default UsageWarningBanner;
