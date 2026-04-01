interface SidenavStorageProps {
    usage: string;
    limit: string;
    percentage: number;
    onUpgradeClick: () => void;
    upgradeLabel?: string;
    isLoading?: boolean;
}
declare const SidenavStorage: ({ usage, limit, percentage, onUpgradeClick, upgradeLabel, isLoading, }: SidenavStorageProps) => JSX.Element;
export default SidenavStorage;
