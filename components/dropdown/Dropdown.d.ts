import { ReactNode } from '../../../node_modules/react';
import { MenuItemType } from '../';
export type DropdownProps<T> = {
    children: ReactNode | ((obj: {
        open: boolean;
    }) => JSX.Element);
    options?: {
        text: string;
        onClick: () => void;
    }[];
    classButton?: string;
    menuItems?: ReactNode[];
    classMenuItems: string;
    openDirection: 'left' | 'right';
    dropdownActionsContext?: Array<MenuItemType<T>>;
    item?: T;
};
declare const Dropdown: <T>({ children, options, classButton, menuItems, classMenuItems, openDirection, dropdownActionsContext, item, }: DropdownProps<T>) => JSX.Element;
export default Dropdown;
