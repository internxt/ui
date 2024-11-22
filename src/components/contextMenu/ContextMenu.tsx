import { useState } from 'react';
import useHotkeys from '../../hooks/useHotKeys';

const MENU_BUTTON_HEIGHT = 40;

export type MenuItemType<T> =
  | { separator: true }
  | {
      separator?: false;
      name: string;
      icon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
      keyboardShortcutOptions?: {
        keyboardShortcutIcon?: React.ForwardRefExoticComponent<{ size?: number | string }>;
        keyboardShortcutText?: string;
      };
      action: (target: T) => void | Promise<void>;
      disabled?: (target: T) => boolean;
      isTitle?: (target: T) => boolean;
    };

export type MenuType<T> = Array<MenuItemType<T>>;

export interface ContextMenuProps<T> {
  item: T;
  menuItemsRef: React.MutableRefObject<HTMLDivElement | null>;
  menu?: MenuType<T>;
  openedFromRightClick: boolean;
  posX: number;
  posY: number;
  isContextMenuCutOff: boolean;
  genericEnterKey: () => void;
  handleMenuClose: () => void;
}

/**
 * Properties for `ContextMenuProps<T>`
 *
 * @template T - Generic type representing the item to which the context menu applies.
 *
 * @property {T} item
 * - The current item associated with the context menu.
 * This object is passed to each menu option's `action` and `disabled` functions.
 *
 * @property {React.MutableRefObject<HTMLDivElement | null>} menuItemsRef
 * - A mutable ref to the `div` containing the context menu. Used for handling the menu's positioning and visibility.
 *
 * @property {MenuType<T>} [menu]
 * - An array of menu options, where each option includes properties like `name`, `icon`, `action`, etc.
 * The `MenuType<T>` type allows some options to be separators (`separator: boolean`).
 *
 * @property {boolean} openedFromRightClick
 * - Indicates whether the context menu was opened via a right-click (`true`).
 * Determines whether the menu's position is set based on the click location or a predefined position.
 *
 * @property {number} posX
 * - X-coordinate for the menu's position, used if `openedFromRightClick` is `true`.
 *
 * @property {number} posY
 * - Y-coordinate for the menu's position, used if `openedFromRightClick` is `true`.
 *
 * @property {boolean} isContextMenuCutOff
 * - Specifies whether the menu should align to the bottom of the screen to prevent it
 * from being cut off on smaller screens. Switches menu positioning between top or bottom.
 *
 * @property {() => void} genericEnterKey
 * - A callback that executes if the Enter key is pressed without a selected menu option.
 * Can be used to define a default action.
 *
 * @property {() => void} handleMenuClose
 * - Function to close the context menu. Called after an action is executed or when pressing Enter in the menu.
 */

const ContextMenu = <T,>({
  item,
  menuItemsRef,
  menu,
  openedFromRightClick,
  posX,
  posY,
  isContextMenuCutOff,
  genericEnterKey,
  handleMenuClose,
}: ContextMenuProps<T>): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setSelectedIndex(index);
  };

  const isUnClickableItem = (menuItem: MenuItemType<T>) =>
    menuItem?.separator || menuItem?.disabled?.(item) || menuItem?.isTitle?.(item);

  const handleArrowDown = () => {
    menu &&
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
    setSelectedIndex((prevIndex) => {
      if (prevIndex !== null) {
        const menuItem = menu ? menu[prevIndex] : undefined;
        if (menuItem && 'action' in menuItem) menuItem.action(item);
      } else genericEnterKey();
      handleMenuClose();
      return null;
    });
  };

  useHotkeys(
    {
      arrowdown: handleArrowDown,
      arrowup: handleArrowUp,
      enter: handleEnterKey,
    },
    [],
  );

  return (
    <div
      className="z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5"
      style={
        openedFromRightClick
          ? { position: 'absolute', left: posX, top: posY, zIndex: 99 }
          : {
              position: 'absolute',
              right: 20,
              [isContextMenuCutOff ? 'bottom' : 'top']: MENU_BUTTON_HEIGHT,
              zIndex: 9999,
            }
      }
      ref={menuItemsRef}
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
                    option.action?.(item);
                    handleMenuClose();
                  }
                }}
                onMouseEnter={() => handleMouseEnter(i)}
              >
                <div
                  className={`flex cursor-pointer flex-row whitespace-nowrap px-4 py-1.5 text-base
                    ${option.disabled?.(item) ? 'font-medium text-gray-50' : ''}
                    ${option.isTitle?.(item) && !option.disabled?.(item) ? 'font-medium text-gray-100' : ''}
                    ${selectedIndex === i && !option.disabled?.(item) ? 'bg-gray-5 text-gray-100 dark:bg-gray-10' : ''}
                    ${!option.disabled?.(item) && !option.isTitle?.(item) && selectedIndex !== i ? 'text-gray-80' : ''}
                  `}
                >
                  <div className="flex flex-row items-center space-x-2">
                    {option.icon && <option.icon size={20} />}
                    <span>{option.name}</span>
                  </div>
                  <span className="ml-5 flex grow items-center justify-end text-sm text-gray-40">
                    {option.keyboardShortcutOptions?.keyboardShortcutIcon && (
                      <option.keyboardShortcutOptions.keyboardShortcutIcon size={14} />
                    )}
                    {option.keyboardShortcutOptions?.keyboardShortcutText ?? ''}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
