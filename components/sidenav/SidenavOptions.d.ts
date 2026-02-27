import { Icon } from '@phosphor-icons/react';
export interface SidenavOption {
    label: string;
    icon: Icon;
    iconDataCy: string;
    isVisible: boolean;
    isActive?: boolean;
    notifications?: number;
    onClick?: () => void;
    subsection?: boolean;
}
interface SidenavOptionsProps {
    options: SidenavOption[];
    isCollapsed: boolean;
    showSubsections?: boolean;
}
declare const SidenavOptions: ({ options, isCollapsed, showSubsections }: SidenavOptionsProps) => JSX.Element;
export default SidenavOptions;
