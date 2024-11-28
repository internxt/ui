import { ReactNode } from '../../../node_modules/react';

export type MenuItemType<T> = {
    separator: true;
} | {
    name?: string;
    separator?: false;
    disabled?: (target: T) => boolean;
    isTitle?: (target: T) => boolean;
    icon?: React.ForwardRefExoticComponent<{
        size?: number | string;
    }>;
    keyboardShortcutOptions?: {
        keyboardShortcutIcon?: React.ForwardRefExoticComponent<{
            size?: number | string;
        }>;
        keyboardShortcutText?: string;
    };
    action?: (target: T) => void | Promise<void>;
    onClick?: () => void;
    node?: ReactNode;
};
export type MenuItemsType<T> = Array<MenuItemType<T>>;
export interface MenuProps<T> {
    item?: T;
    menu?: MenuItemsType<T>;
    handleMenuClose: () => void;
    genericEnterKey?: () => void;
}
declare const Menu: <T>({ item, menu, genericEnterKey, handleMenuClose }: MenuProps<T>) => JSX.Element;
export default Menu;
