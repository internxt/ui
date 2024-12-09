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
/**
 * Menu component
 *
 * @template T
 * @param {MenuProps<T>} props - Properties of the Menu component.
 *
 * @property {T} [item]
 * - Optional item that may be used in menu actions (e.g., data passed for actions).
 *
 * @property {MenuItemsType<T>} [menu]
 * - Optional array of menu items. Each item can define a separator, title, icon, action, etc.
 *
 * @property {() => void} handleMenuClose
 * - Function to close the menu.
 *
 * @property {() => void} [genericEnterKey]
 * - Optional callback for when the Enter key is pressed without selecting a menu item.
 *
 * @returns {JSX.Element}
 * - The rendered Menu component.
 *
 * The component handles key events such as Arrow Down, Arrow Up, and Enter for navigation and action execution.
 * It also supports mouse interactions for hovering and selecting menu items.
 *
 * Each menu item can have an action, an optional keyboard shortcut, and an icon.
 * If the item is disabled or marked as a title, it won't be clickable.
 *
 * It features a dynamic index for item selection, with keyboard and mouse-based navigation.
 */
declare const Menu: <T>({ item, menu, genericEnterKey, handleMenuClose }: MenuProps<T>) => JSX.Element;
export default Menu;
