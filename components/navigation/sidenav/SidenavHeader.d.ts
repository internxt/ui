interface SidenavHeaderProps {
    logo: string;
    title: string;
    onClick: () => void;
    isCollapsed: boolean;
    className?: string;
    onToggleCollapse?: () => void;
    suiteLauncher?: {
        className?: string;
        suiteArray: {
            icon: JSX.Element;
            title: string;
            onClick: () => void;
            isMain?: boolean;
            availableSoon?: boolean;
            isLocked?: boolean;
        }[];
        soonText: string;
    };
}
declare const SidenavHeader: ({ logo, title, onClick, isCollapsed, className, onToggleCollapse, suiteLauncher, }: SidenavHeaderProps) => JSX.Element;
export default SidenavHeader;
