import { IconProps } from '@phosphor-icons/react';
interface SidenavItemProps {
    label: string;
    notifications?: number;
    Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    onClick?: () => void;
    onRefresh?: () => void | Promise<void>;
    iconDataCy?: string;
    isActive?: boolean;
    isCollapsed?: boolean;
    subsection?: boolean;
}
declare const SidenavItem: ({ label, Icon, onClick, onRefresh, notifications, iconDataCy, isActive, isCollapsed, subsection, }: SidenavItemProps) => JSX.Element;
export default SidenavItem;
