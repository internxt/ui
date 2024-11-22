import { useState, ReactNode } from 'react';
import { MenuType } from '../contextMenu/ContextMenu';
import useHotkeys from '../../hooks/useHotKeys';

export type DropdownProps<T> = {
  children: ReactNode | ((obj: { open: boolean }) => JSX.Element);
  options?: { text: string; onClick: () => void }[];
  classButton?: string;
  menuItems?: ReactNode[];
  classMenuItems: string;
  openDirection: 'left' | 'right';
  dropdownActionsContext?: MenuType<T>;
  item?: T;
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const group1 = options ? [...options.map((option) => ({ type: 'option', data: option }))] : [];
  const group2 = menuItems
    ? [...menuItems.map((menuItem, index) => ({ type: 'menuItem', data: menuItem, index }))]
    : [];
  const group3 = dropdownActionsContext
    ? [
        ...dropdownActionsContext.map((action, index) => ({
          type: 'action',
          data: action,
          index,
        })),
      ]
    : [];

  const allItems = [...group1, ...group2, ...group3];

  const handleArrowDown = () => {
    if (!isOpen) return;
    setActiveIndex((prev) => {
      let nextIndex = prev === null ? 0 : (prev + 1) % allItems.length;
      const activeItem = allItems[nextIndex];
      if (
        activeItem?.type === 'action' &&
        item &&
        activeItem?.data &&
        typeof activeItem.data === 'object' &&
        'separator' in activeItem.data &&
        activeItem.data.separator
      ) {
        nextIndex = (nextIndex + 1) % allItems.length;
      }
      return nextIndex;
    });
  };

  const handleArrowUp = () => {
    if (!isOpen) return;

    setActiveIndex((prev) => {
      let prevIndex = prev === null ? allItems.length - 1 : (prev - 1 + allItems.length) % allItems.length;
      const activeItem = allItems[prevIndex];
      if (
        activeItem?.type === 'action' &&
        item &&
        activeItem?.data &&
        typeof activeItem.data === 'object' &&
        'separator' in activeItem.data &&
        activeItem.data.separator
      ) {
        prevIndex = (prevIndex - 1 + allItems.length) % allItems.length;
      }
      return prevIndex;
    });
  };

  const handleEnterKey = () => {
    if (activeIndex === null || !isOpen) return;

    const activeItem = allItems[activeIndex];

    if (
      activeItem?.type === 'option' &&
      activeItem?.data &&
      typeof activeItem.data === 'object' &&
      'onClick' in activeItem.data
    ) {
      activeItem.data.onClick();
    } else if (
      activeItem?.type === 'action' &&
      item &&
      activeItem?.data &&
      typeof activeItem.data === 'object' &&
      'action' in activeItem.data
    ) {
      activeItem.data.action(item);
    }

    closeMenu();
  };

  useHotkeys(
    {
      arrowdown: handleArrowDown,
      arrowup: handleArrowUp,
      enter: handleEnterKey,
    },
    [isOpen, activeIndex, allItems],
  );

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
          {options?.map((option, index) => (
            <div
              key={option.text}
              className={`cursor-pointer px-3 py-1.5 text-gray-80 hover:bg-gray-1 dark:hover:bg-gray-10 
              ${activeIndex === index ? 'bg-gray-5 text-gray-100 dark:bg-gray-10' : ''}`}
              onClick={() => {
                option.onClick();
                closeMenu();
              }}
            >
              {option.text}
            </div>
          ))}
          {menuItems && (
            <div className="w-full max-w-xs">
              {menuItems?.map((menuItem, index) => (
                <div
                  key={'menuitem-' + index}
                  className={`cursor-pointer px-3 py-1.5  ${activeIndex === index + group1?.length ? 'bg-gray-5 text-gray-100 dark:bg-gray-10' : ''}`}
                  onClick={closeMenu}
                >
                  {menuItem}
                </div>
              ))}
            </div>
          )}
          {dropdownActionsContext && item && (
            <div className="w-full max-w-xs">
              {dropdownActionsContext?.map((option, index) => (
                <div key={(option && 'name' in option && option?.name) || index}>
                  {option &&
                    (option.separator ? (
                      <div className="my-0.5 flex w-full flex-row px-4">
                        <div className="h-px w-full bg-gray-10" />
                      </div>
                    ) : (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          option.action?.(item);
                          closeMenu();
                        }}
                        className={`flex cursor-pointer flex-row whitespace-nowrap px-4 py-1.5 text-base ${
                          option.disabled?.(item) ? 'pointer-events-none font-medium text-gray-100' : 'text-gray-80'
                        }  ${activeIndex === index + group1?.length + group2?.length ? 'bg-gray-5 text-gray-100 dark:bg-gray-10' : ''}`}
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
                    ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
