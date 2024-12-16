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
/**
 * Dropdown component
 *
 * @property {ReactNode | ((obj: { open: boolean }) => JSX.Element)} children
 * - The content of the dropdown button. It can be a React component or a function that receives an object
 * with the `open` property to render the dropdown's state.
 *
 * @property {Object[]} [options]
 * - The dropdown options, where each option contains a text and an `onClick` function
 * that is executed when the option is clicked.
 *
 * @property {string} [classButton]
 * - Additional classes for the dropdown button, allowing customization of its appearance.
 *
 * @property {ReactNode[]} [menuItems]
 * - Menu items to be added to the dropdown. These can be React components rendered inside the menu.
 *
 * @property {string} classMenuItems
 * - Additional CSS classes for the container of menu items, allowing for custom styling.
 *
 * @property {'left' | 'right'} openDirection
 * - The direction in which the dropdown menu opens. It can be 'left' or 'right'.
 *
 * @property { Array<MenuItemType<T>>} [dropdownActionsContext]
 * - Additional actions that can be passed to the dropdown menu.
 * Used for extending the menu with more options or functionalities.
 *
 * @property {T} [item]
 * - The current item that may be used within the options or actions of the menu,
 * allowing customization of the dropdown's logic.
 */
declare const Dropdown: <T>({ children, options, classButton, menuItems, classMenuItems, openDirection, dropdownActionsContext, item, }: DropdownProps<T>) => JSX.Element;
export default Dropdown;