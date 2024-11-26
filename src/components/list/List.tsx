import _ from 'lodash';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ListItem from './ListItem';
import ListHeader, { HeaderProps } from './ListHeader';
import useHotkeys from '../../hooks/useHotKeys';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';
import InfiniteScroll from '../infiniteScroll/InfiniteScroll';
import { MenuItemsType } from '../menu/Menu';

export interface ListProps<T, F> {
  header: HeaderProps<T, F>[];
  checkboxDataCy?: string;
  items: T[];
  itemComposition: Array<(props: T) => JSX.Element>;
  selectedItems: T[];
  onClick?: (props: T) => void;
  onDoubleClick?: (props: T) => void;
  onEnterPressed?: (props: T) => void;
  onSelectedItemsChanged: (changes: { props: T; value: boolean }[]) => void;
  isLoading?: boolean;
  forceLoading?: boolean;
  skinSkeleton?: Array<JSX.Element>;
  emptyState?: ReactNode;
  onNextPage?: () => void;
  onOrderByChanged?: (value: { field: F; direction: 'ASC' | 'DESC' }) => void;
  orderBy?: { field: F; direction: 'ASC' | 'DESC' };
  hasMoreItems?: boolean;
  menu?: MenuItemsType<T>;
  displayMenuDiv?: boolean;
  className?: string;
  keyboardShortcuts?: Array<'selectAll' | 'unselectAll' | 'multiselect' | Array<'delete' & (() => void)>>;
  disableKeyboardShortcuts?: boolean;
  disableItemCompositionStyles?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  keyBoardShortcutActions?: {
    onShiftFKeysPressed?: () => void;
    onRKeyPressed?: () => void;
    onBackspaceKeyPressed?: () => void;
  };
}

/**
 *
 * Generic arguments:
 * -T: Identifiable entity
 * -F: Orderable fields of the entity T for better typing in callbacks related to ordering
 *
 * "header" contains header items which can or cannot be orderable
 * "items" is an array of instances of T entity and the source of truth of what is printable on the list component
 * "itemComposition" given an item of type T, return how its printed on the list component
 * "onDoubleClick" triggered when an item is double clicked
 * "onSelectedItemsChanged" triggered when the set of selected items changes
 * "onNextPage" is triggered when the user gets to the end of the current printed items
 * "onOrderByChanged" is triggered when the user changes the way the list is ordered
 * "orderBy" is passed by a component higher in the herarchy
 * which contains the state of what order is currently followed
 * "hasMoreItems" is passed by the component that is the source of truth for the fetching of items
 * "menu" contains the valid of options for an item of type T
 *
 * This component has no state in it. The state must be kept by an smarter component (higher in the herarchy)
 */
const List = <T extends { id: number }, F extends keyof T>({
  header,
  checkboxDataCy,
  items,
  itemComposition,
  selectedItems,
  onClick,
  onDoubleClick,
  onEnterPressed,
  onSelectedItemsChanged,
  isLoading,
  forceLoading,
  skinSkeleton,
  emptyState,
  orderBy,
  onOrderByChanged,
  onNextPage,
  hasMoreItems,
  menu,
  displayMenuDiv,
  className,
  disableItemCompositionStyles,
  onMouseEnter,
  onMouseLeave,
  keyBoardShortcutActions,
  disableKeyboardShortcuts,
}: ListProps<T, F>): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isItemSelected = (item: T) => {
    return selectedItems.some((i) => item.id === i.id);
  };
  const container = document.getElementById('scrollableList');
  const isVerticalScrollbarVisible = container && container.scrollHeight > container.clientHeight;
  const isEmptyState = !hasMoreItems && items.length === 0 && !isLoading;
  const [idItemContextMenuOpen, setIdItemContextMenuOpen] = useState<number | null>(null);

  const skeletonData = new Array(25).fill(0).map(() => ({
    skeletonItem: skinSkeleton,
    columns: header.map((column) => column.width),
  }));

  const loader = <SkeletonLoader skeleton={skeletonData} />;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIdItemContextMenuOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('contextmenu', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
    };
  }, []);

  const handleNextPage = () => {
    onNextPage?.();
  };

  const unselectAllItems = () => {
    const changesToMake = selectedItems.map((item) => ({ props: item, value: false }));
    onSelectedItemsChanged(changesToMake);
  };

  const unselectAllItemsAndSelectOne = (props: T) => {
    const changesToMake = [...selectedItems.map((item) => ({ props: item, value: false })), { props, value: true }];
    onSelectedItemsChanged(changesToMake);
  };

  const executeClickOnSelectedItem = () => {
    const oneItemSelected = selectedItems.length === 1;
    if (oneItemSelected) {
      const selectedItem = selectedItems[0];
      onEnterPressed?.(selectedItem);
    }
  };

  const selectAllItems = () => {
    const notSelectedItems = _.difference(items, selectedItems);
    const changesToMake = notSelectedItems.map((item) => ({ props: item, value: true }));
    onSelectedItemsChanged(changesToMake);
  };

  const onTopSelectionCheckboxClick = () => {
    const areAllItemsSelected = selectedItems.length === items.length;

    if (areAllItemsSelected) {
      unselectAllItems();
    } else {
      selectAllItems();
    }
  };

  const onOrderableColumnClicked = (field: HeaderProps<T, F>) => {
    if (!field.orderable || !onOrderByChanged) return;

    const columnWasAlreadySelected = orderBy?.field === field.name;
    if (columnWasAlreadySelected) {
      onOrderByChanged({ field: field.name, direction: orderBy.direction === 'ASC' ? 'DESC' : 'ASC' });
    } else {
      onOrderByChanged({ field: field.name, direction: field.defaultDirection ?? 'ASC' });
    }
  };

  const handleKeyPress = (action: () => void) => {
    if (!disableKeyboardShortcuts) action();
  };

  const handleRKeyPressed = () => {
    keyBoardShortcutActions?.onRKeyPressed?.();
  };

  const handleBackspaceKeyPressed = () => {
    keyBoardShortcutActions?.onBackspaceKeyPressed?.();
  };

  useHotkeys(
    {
      'ctrl+a': () => handleKeyPress(selectAllItems),
      'meta+a': () => handleKeyPress(selectAllItems),
      esc: () => handleKeyPress(unselectAllItems),
      r: () => handleKeyPress(handleRKeyPressed),
      backspace: () => handleKeyPress(handleBackspaceKeyPressed),
      delete: () => handleKeyPress(handleBackspaceKeyPressed),
    },
    [items, selectedItems, disableKeyboardShortcuts],
  );

  const onItemClick = (itemClicked: T, e: React.MouseEvent<HTMLDivElement>) => {
    if (e.metaKey || e.ctrlKey) {
      onSelectedItemsChanged([{ props: itemClicked, value: !isItemSelected(itemClicked) }]);
    } else if (!isItemSelected(itemClicked)) {
      onClick?.(itemClicked);
    }
    setIdItemContextMenuOpen(null);
  };

  const onRightItemClick = (props: T, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isItemSelected(props)) {
      unselectAllItemsAndSelectOne(props);
    }
    setIdItemContextMenuOpen(props.id);
  };

  const onCloseContextMenu = () => {
    setIdItemContextMenuOpen(null);
  };

  const handleThreeDotsButtonClick = (e: React.MouseEvent<HTMLButtonElement>, item: T) => {
    e.stopPropagation();

    setIdItemContextMenuOpen((prevId) => (prevId ? null : item.id));
    if (!isItemSelected(item)) {
      unselectAllItemsAndSelectOne(item);
    }
  };

  return (
    <div
      id="generic-list-component"
      className={`relative flex h-full flex-col overflow-x-hidden overflow-y-hidden ${className}`}
      ref={containerRef}
    >
      {!isEmptyState ? (
        <ListHeader
          selectedItems={selectedItems}
          onTopSelectionCheckboxClick={onTopSelectionCheckboxClick}
          items={items}
          header={header}
          orderBy={orderBy}
          onOrderableColumnClicked={onOrderableColumnClicked}
          menu={menu}
          displayMenuDiv={displayMenuDiv}
          isVerticalScrollbarVisible={isVerticalScrollbarVisible}
          checkboxDataCy={checkboxDataCy}
        />
      ) : null}

      {/* BODY */}
      <div id="scrollableList" className="flex h-full flex-col overflow-x-auto overflow-y-auto">
        {isEmptyState ? (
          emptyState
        ) : items.length > 0 && !forceLoading ? (
          <InfiniteScroll
            handleNextPage={handleNextPage}
            hasMoreItems={!!hasMoreItems}
            loader={<></>}
            scrollableTarget="scrollableList"
          >
            {items.map((item, index) => (
              <ListItem<T>
                key={item.id}
                item={item}
                listIndex={index}
                isOpen={idItemContextMenuOpen === item.id}
                onClose={onCloseContextMenu}
                itemComposition={itemComposition}
                selected={isItemSelected(item)}
                onDoubleClick={onDoubleClick && (() => onDoubleClick(item))}
                onClick={(e) => onItemClick(item, e)}
                onClickContextMenu={(e) => onRightItemClick(item, e)}
                onThreeDotsButtonPressed={(e) => handleThreeDotsButtonClick(e, item)}
                columnsWidth={header.map((column) => column.width)}
                menu={menu}
                onSelectedChanged={(value) => onSelectedItemsChanged([{ props: item, value }])}
                disableItemCompositionStyles={disableItemCompositionStyles}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                genericEnterKey={executeClickOnSelectedItem}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <>{loader}</>
        )}

        {/* Click outside of the list to unselect all items */}
        {items.length > 0 && (
          <div
            className="h-full w-full py-6"
            onClick={unselectAllItems}
            onContextMenu={(e) => {
              e.preventDefault();
              unselectAllItems();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default List;
