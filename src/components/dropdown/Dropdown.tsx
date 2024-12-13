import { useState, ReactNode, useEffect, useRef } from 'react';
import { Menu, MenuItemType } from '../';

export type DropdownProps<T> = {
  children: ReactNode | ((obj: { open: boolean }) => JSX.Element);
  options?: { text: string; onClick: () => void }[];
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

const Dropdown = <T,>({
  children,
  options,
  classButton,
  menuItems,
  classMenuItems,
  openDirection,
  dropdownActionsContext,
  item,
}: DropdownProps<T>): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const direction = openDirection === 'left' ? 'origin-top-left' : 'origin-top-right';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('contextmenu', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
    };
  }, []);

  const group1: Array<MenuItemType<T>> = options
    ? options.map((option) => ({
        name: option.text,
        action: () => option.onClick(),
      }))
    : [];

  const group2: Array<MenuItemType<T>> = menuItems
    ? menuItems.map((menuItem) => ({
        node: menuItem,
      }))
    : [];

  const group3: Array<MenuItemType<T>> = dropdownActionsContext || [];

  const allItems = [...group1, ...group2, ...group3];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative outline-none" ref={containerRef}>
      <button
        className={`cursor-pointer outline-none ${classButton}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {typeof children === 'function' ? children({ open: isOpen }) : children}
      </button>

      <div
        className={`absolute ${openDirection === 'left' ? 'left-0' : 'right-0'} 
          transform shadow-subtle-hard transition-all duration-100 ease-in-out ${
            isOpen ? `scale-100 opacity-100 ${direction}` : 'pointer-events-none scale-95 opacity-0'
          }`}
        data-testid="menu-dropdown"
      >
        <div className={`absolute ${classMenuItems}`}>
          <Menu item={item} isOpen={isOpen} handleMenuClose={closeMenu} menu={allItems} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
