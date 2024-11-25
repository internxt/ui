import { LegacyRef, useEffect, useRef, useState } from 'react';
import { DotsThree } from '@phosphor-icons/react';
import ContextMenu from '../contextMenu/ContextMenu';
import useHotkeys from '../../hooks/useHotKeys';
import Checkbox from '../checkbox/Checkbox';
import { MenuItemsType } from '../menu/Menu';

interface ListItemProps<T> {
  item: T;
  listIndex: number;
  itemComposition: Array<(props: T) => JSX.Element>;
  selected: boolean;
  isOpen: boolean;
  columnsWidth: Array<string>;
  onClose: () => void;
  onSelectedChanged: (value: boolean) => void;
  onDoubleClick?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickContextMenu?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onThreeDotsButtonPressed?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  menu?: MenuItemsType<T>;
  disableItemCompositionStyles?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  genericEnterKey: () => void;
}
const TOP_MIN_HEIGHT = 500;

const ListItem = <T extends { id: number }>({
  item,
  listIndex,
  itemComposition,
  selected,
  isOpen,
  columnsWidth,
  onClose,
  onSelectedChanged,
  onDoubleClick,
  onClick,
  onClickContextMenu,
  onThreeDotsButtonPressed,
  disableItemCompositionStyles,
  menu,
  onMouseEnter,
  onMouseLeave,
  genericEnterKey,
}: ListItemProps<T>): JSX.Element => {
  const menuButtonRef = useRef<HTMLButtonElement | undefined>();
  const rootWrapperRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<HTMLDivElement | null>(null);

  const [openedFromRightClick, setOpenedFromRightClick] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isContextMenuCutOff, setIsContextMenuCutOff] = useState(false);

  useEffect(() => {
    if (
      menuItemsRef.current &&
      (menuItemsRef.current.offsetHeight !== dimensions.height ||
        menuItemsRef.current?.offsetWidth !== dimensions.width)
    )
      setDimensions({
        width: menuItemsRef.current.offsetWidth,
        height: menuItemsRef.current.offsetHeight,
      });
  }, [dimensions.height, dimensions.width]);

  useEffect(() => {
    if (!openedFromRightClick) handleOpenPosition();

    if (!open) {
      setOpenedFromRightClick(false);
      setPosX(0);
      setPosY(0);
    }
  }, [open]);

  function handleOpenPosition() {
    const element = menuButtonRef.current;
    const contextMenuHeight = menuItemsRef?.current?.offsetHeight || 300;
    if (!element) return;
    if (!contextMenuHeight) return;

    const { bottom } = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isContextCutOff = bottom + contextMenuHeight > windowHeight;
    setIsContextMenuCutOff(isContextCutOff);
  }

  const handleContextMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    onClickContextMenu?.(event);
    const childWidth = menuItemsRef?.current?.offsetWidth || 240;
    const childHeight = menuItemsRef?.current?.offsetHeight || 300;
    const wrapperRect = rootWrapperRef?.current?.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    let x = event.clientX - (wrapperRect?.left || 0);
    let y = event.clientY - (wrapperRect?.top || 0);

    if (event.clientX + childWidth > innerWidth) {
      x = x - childWidth;
    }

    if (event.clientY + childHeight > innerHeight && event.clientY > TOP_MIN_HEIGHT) {
      y = y - childHeight;
    }

    setPosX(x);
    setPosY(y);
    setOpenedFromRightClick(true);
  };

  const handleContextMenuDotsButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onThreeDotsButtonPressed?.(event);
    setOpenedFromRightClick(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    openedFromRightClick && handleMenuClose();
  };

  const handleMenuClose = () => {
    onClose();
  };

  const handleEnterKey = () => {
    if (!isOpen) {
      genericEnterKey();
    }
  };

  useHotkeys(
    {
      r: handleMenuClose,
      backspace: handleMenuClose,
      enter: handleEnterKey,
    },
    [],
  );

  return (
    <div
      onDoubleClick={onDoubleClick}
      onClick={handleClick}
      onContextMenu={handleContextMenuClick}
      ref={rootWrapperRef}
      className={`group relative flex h-14 flex-row items-center pl-14 pr-5 ${
        selected ? 'bg-primary/10 text-gray-100 dark:bg-primary/20' : 'focus-within:bg-gray-1 hover:bg-gray-1'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isOpen && selected && (
        <ContextMenu
          item={item}
          menu={menu}
          menuItemsRef={menuItemsRef}
          openedFromRightClick={openedFromRightClick}
          posX={posX}
          posY={posY}
          isContextMenuCutOff={isContextMenuCutOff}
          genericEnterKey={genericEnterKey}
          handleMenuClose={handleMenuClose}
        />
      )}

      <div
        className={`absolute left-5 top-0 flex h-full w-0 flex-row items-center justify-start p-0 opacity-0 focus-within:opacity-100 group-hover:opacity-100 ${
          selected && 'opacity-100'
        }`}
      >
        <Checkbox
          onClick={(e) => {
            e.stopPropagation();
            onSelectedChanged(!selected);
          }}
          checked={selected}
          checkboxDataCy={`driveListItemCheckbox${listIndex}`}
        />
      </div>
      {disableItemCompositionStyles ? (
        <div
          key={0}
          className={`grow-1 relative flex h-full w-full flex-row items-center border-b ${
            selected ? 'border-primary/5' : 'border-gray-5'
          }`}
        >
          {itemComposition[0](item)}
        </div>
      ) : (
        new Array(itemComposition.length).fill(0).map((_col, i) => (
          <div
            key={i}
            className={`relative flex h-full shrink-0 flex-row items-center border-b ${
              selected ? 'border-primary/5' : 'border-gray-5'
            } ${columnsWidth[i]}`}
          >
            {itemComposition[i](item)}
          </div>
        ))
      )}
      <div
        className={`flex h-14 w-12 shrink-0 flex-col items-center justify-center border-b ${
          selected ? 'border-primary/5' : 'border-gray-5'
        }`}
      >
        <button
          ref={menuButtonRef as LegacyRef<HTMLButtonElement>}
          className={`flex h-10 w-10 flex-col items-center justify-center rounded-md opacity-0 outline-none focus-visible:opacity-100 group-hover:opacity-100 ${
            selected
              ? 'text-gray-80 hover:bg-primary/10 focus-visible:bg-primary/10'
              : 'text-gray-60 hover:bg-gray-10 focus-visible:bg-gray-10'
          }`}
          onClick={(e) => {
            handleContextMenuDotsButton(e);
          }}
        >
          <DotsThree size={24} weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
