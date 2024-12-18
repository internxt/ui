import { isValidElement, ReactNode, useEffect, useState } from 'react';
import useHotkeys from '../../hooks/useHotKeys';

export type MenuItemType<T> =
  | { separator: true }
  | {
      name?: string;
      separator?: false;
      disabled?: (target: T) => boolean;
      isTitle?: (target: T) => boolean;
      icon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
      keyboardShortcutOptions?: {
        keyboardShortcutIcon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
        keyboardShortcutText?: string;
      };

      action?: (target: T) => void | Promise<void>;
      onClick?: () => void;
      node?: ReactNode;
    };

export type MenuItemsType<T> = Array<MenuItemType<T>>;

export interface MenuProps<T> {
  item?: T;
  isOpen: boolean;
  menu?: MenuItemsType<T>;
  handleMenuClose: () => void;
  genericEnterKey?: () => void;
  paddingX?: string;
  paddingY?: string;
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
 * @property {boolean} [isOpen]
 * - To know is Menu is visible.
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
 * @property {string} [paddingX='px-4']
 * - Optional padding for the X axis (horizontal) of each menu item. Defaults to `px-4`.
 *
 * @property {string} [paddingY='py-1.5']
 * - Optional padding for the Y axis (vertical) of each menu item. Defaults to `py-1.5`.
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

const Menu = <T,>({
  item,
  menu,
  isOpen,
  genericEnterKey,
  handleMenuClose,
  paddingX = 'px-4',
  paddingY = 'py-1.5',
}: MenuProps<T>): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [enterPressed, setEnterPressed] = useState<boolean>(false);
  const handleMouseEnter = (index: number) => {
    setSelectedIndex(index);
  };

  const isUnClickableItem = (menuItem: MenuItemType<T>) =>
    menuItem?.separator || (item && menuItem?.disabled?.(item)) || (item && menuItem?.isTitle?.(item));

  const handleArrowDown = () => {
    menu &&
      isOpen &&
      setSelectedIndex((prevIndex) => {
        const getNextEnabledIndex = (startIndex: number): number => {
          let newIndex = startIndex;
          let menuItem = menu[newIndex];
          while (isUnClickableItem(menuItem)) {
            newIndex = (newIndex + 1) % menu.length;
            menuItem = menu[newIndex];
            if (startIndex === newIndex) break;
          }
          return newIndex;
        };

        const newCurrentIndex = prevIndex === null ? 0 : (prevIndex + 1) % menu.length;
        const newIndex = getNextEnabledIndex(newCurrentIndex);
        const menuItem = menu[newIndex];
        return isUnClickableItem(menuItem) ? null : newIndex;
      });
  };

  const handleArrowUp = () => {
    menu &&
      isOpen &&
      setSelectedIndex((prevIndex) => {
        const getPreviousEnabledIndex = (startIndex: number): number => {
          let newIndex = startIndex;
          let menuItem = menu[newIndex];
          while (isUnClickableItem(menuItem)) {
            newIndex = (newIndex - 1 + menu.length) % menu.length;
            menuItem = menu[newIndex];
            if (startIndex === newIndex) break;
          }
          return newIndex;
        };

        const newCurrentIndex = prevIndex === null ? menu.length - 1 : (prevIndex - 1 + menu.length) % menu.length;
        const newIndex = getPreviousEnabledIndex(newCurrentIndex);
        const menuItem = menu[newIndex];
        return isUnClickableItem(menuItem) ? null : newIndex;
      });
  };

  const handleEnterKey = () => {
    menu &&
      isOpen &&
      setSelectedIndex((prevIndex) => {
        if (prevIndex !== null) {
          const menuItem = menu ? menu[prevIndex] : undefined;
          if (item && menuItem && 'action' in menuItem && menuItem.action) menuItem.action(item);
          if (item && menuItem && 'node' in menuItem && menuItem.node && isValidElement(menuItem.node)) {
            const onClick = menuItem.node.props.onClick;
            onClick && onClick();
          }
        } else if (genericEnterKey) genericEnterKey();
        setEnterPressed(true);
        return null;
      });
  };

  useEffect(() => {
    if (enterPressed) {
      handleMenuClose();
      setEnterPressed(false);
    }
  }, [enterPressed]);

  useHotkeys(
    {
      arrowdown: handleArrowDown,
      arrowup: handleArrowUp,
      enter: handleEnterKey,
    },
    [isOpen],
  );

  return (
    <div
      className={`z-20 mt-0 flex flex-col rounded-lg bg-surface ${paddingY} shadow-subtle-hard outline-none dark:bg-gray-5`}
    >
      {menu?.map((option, i) => (
        <div key={i}>
          {option && option.separator ? (
            <div className="my-0.5 flex w-full flex-row px-4">
              <div className="h-px w-full bg-gray-10" />
            </div>
          ) : (
            option && (
              <div
                className={`${isUnClickableItem(option) ? 'pointer-events-none' : ''}`}
                onClick={(e) => {
                  if (!isUnClickableItem(option)) {
                    e.stopPropagation();
                    item && option.action?.(item);
                    option.onClick && option.onClick();
                    handleMenuClose();
                  }
                }}
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <div
                  className={`flex cursor-pointer flex-row whitespace-nowrap ${paddingX} ${paddingY} text-base
                    ${item && option.disabled?.(item) && 'font-medium text-gray-50'}
                    ${item && option.isTitle?.(item) && !option.disabled?.(item) && 'font-medium text-gray-100'}
                    ${selectedIndex === i && item && !option.disabled?.(item) && 'bg-gray-5 text-gray-100 dark:bg-gray-10'}
                    ${item && !option.disabled?.(item) && !option.isTitle?.(item) && selectedIndex !== i && 'text-gray-80'}
                  `}
                >
                  {option.node ? (
                    option.node
                  ) : (
                    <div className="flex flex-row items-center space-x-2">
                      {option.icon && <option.icon size={20} />}
                      <span>{option.name}</span>
                    </div>
                  )}
                  {option.keyboardShortcutOptions && (
                    <span className="ml-5 flex grow items-center justify-end text-sm text-gray-40">
                      {option.keyboardShortcutOptions?.keyboardShortcutIcon && (
                        <option.keyboardShortcutOptions.keyboardShortcutIcon size={14} />
                      )}
                      {option.keyboardShortcutOptions?.keyboardShortcutText ?? ''}
                    </span>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
