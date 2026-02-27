import { ReactNode } from '../../../node_modules/react';
import { SidenavOption } from './SidenavOptions';
export interface SidenavHeader {
    logo: string;
    title: string;
    onClick: () => void;
    className?: string;
}
export interface SidenavStorage {
    usage: string;
    limit: string;
    percentage: number;
    onUpgradeClick: () => void;
    upgradeLabel?: string;
    isLoading?: boolean;
}
export interface SidenavProps {
    header: SidenavHeader;
    primaryAction?: ReactNode;
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
    collapsedPrimaryAction?: ReactNode;
    options: SidenavOption[];
    showSubsections?: boolean;
    isCollapsed?: boolean;
    storage?: SidenavStorage;
    onToggleCollapse?: () => void;
}
/**
 * Sidenav component
 *
 * A custom sidenav component that provides a sidebar with options for navigation and interaction.
 *
 * @property {SidenavHeader} header - Header configuration with logo, title, and onClick handler
 * @property {ReactNode} primaryAction - The primary action displayed at the top of the sidenav
 * @property {object} suiteLauncher - The suite launcher configuration
 * @property {ReactNode} collapsedPrimaryAction - The primary action displayed when the sidenav is collapsed
 * @property {SidenavOption[]} options - An array of options to be displayed in the sidenav. Each option can specify an 'as' prop to use a custom component (e.g., NavLink)
 * @property {boolean} showSubsections - Determines whether to display the subsections of the sidenav
 * @property {boolean} isCollapsed - Determines whether the sidenav is collapsed or not
 * @property {SidenavStorage} storage - The storage information displayed at the bottom of the sidenav
 * @property {() => void} onToggleCollapse - A callback function triggered when the collapse button is clicked
 */
declare const Sidenav: ({ header, primaryAction, suiteLauncher, collapsedPrimaryAction, options, showSubsections, isCollapsed, storage, onToggleCollapse, }: SidenavProps) => import("react/jsx-runtime").JSX.Element;
export default Sidenav;
