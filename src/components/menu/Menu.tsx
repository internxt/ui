import { ReactNode, useEffect, useState } from 'react';
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
  item: T;
  menu?: MenuItemsType<T>;
  handleMenuClose: () => void;
  genericEnterKey?: () => void;
}

const Menu = <T,>({ item, menu, genericEnterKey, handleMenuClose }: MenuProps<T>): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [enterPressed, setEnterPressed] = useState<boolean>(false);
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
        if (menuItem && 'action' in menuItem && menuItem.action) menuItem.action(item);
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
    [],
  );

  return (
    <div className="z-20 mt-0 flex flex-col rounded-lg bg-surface py-1.5 shadow-subtle-hard outline-none dark:bg-gray-5">
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
                    option.onClick && option.onClick();
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
                  {option.node ? (
                    option.node
                  ) : (
                    <div className="flex flex-row items-center space-x-2">
                      {option.icon && <option.icon size={20} />}
                      <span>{option.name}</span>
                    </div>
                  )}
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

export default Menu;
