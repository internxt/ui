import { useState, ReactNode } from 'react';
import Menu, { MenuItemsType } from '../menu/Menu';

export type DropdownProps<T> = {
  children: ReactNode | ((obj: { open: boolean }) => JSX.Element);
  options?: { text: string; onClick: () => void }[];
  classButton?: string;
  menuItems?: ReactNode[];
  classMenuItems: string;
  openDirection: 'left' | 'right';
  dropdownActionsContext?: MenuItemsType<T>;
  item: T;
};

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

  const group1: MenuItemsType<T> = options
    ? options.map((option) => ({
        name: option.text,
        action: () => option.onClick(),
      }))
    : [];

  const group2: MenuItemsType<T> = menuItems
    ? menuItems.map((menuItem) => ({
        node: menuItem,
      }))
    : [];

  const group3: MenuItemsType<T> = dropdownActionsContext || [];

  const allItems = [...group1, ...group2, ...group3];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative outline-none">
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
          <Menu item={item} handleMenuClose={closeMenu} menu={allItems} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
