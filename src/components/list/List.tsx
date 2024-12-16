import _ from 'lodash';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ListItem from './ListItem';
import ListHeader, { HeaderProps } from './ListHeader';
import useHotkeys from '../../hooks/useHotKeys';
import { SkeletonLoader } from '../skeletonLoader';
import { InfiniteScroll } from '../infiniteScroll';
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
 * List component
 *
 * @property {HeaderProps<T, F>[]} header
 * - Array of headers for the list. Each header defines the properties of the columns displayed.
 *
 * @property {string} [checkboxDataCy]
 * - Optional `data-cy` attribute used for testing checkboxes in the list.
 *
 * @property {T[]} items
 * - Array of items to be displayed in the list. Each item corresponds to the data for each row.
 *
 * @property {(props: T) => JSX.Element}[] itemComposition
 * - Array of functions that return JSX elements for rendering each item in the list.
 *
 * @property {T[]} selectedItems
 * - Array of selected items.
 *
 * @property {(props: T) => void} [onClick]
 * - Optional callback triggered when an item is clicked.
 *
 * @property {(props: T) => void} [onDoubleClick]
 * - Optional callback triggered when an item is double-clicked.
 *
 * @property {(props: T) => void} [onEnterPressed]
 * - Optional callback triggered when the Enter key is pressed on an item.
 *
 * @property {(changes: { props: T; value: boolean }[]) => void} onSelectedItemsChanged
 * - Callback triggered when the selection state of the items changes.
 *
 * @property {boolean} [isLoading]
 * - Optional flag indicating if the list is loading. If true, a loading state will be shown.
 *
 * @property {boolean} [forceLoading]
 * - Optional flag to force the loading state, even if no items are loading.
 *
 * @property {JSX.Element[]} [skinSkeleton]
 * - Optional array of skeleton elements to be displayed while the list is loading.
 *
 * @property {ReactNode} [emptyState]
 * - Optional content to display when there are no items in the list and no loading state.
 *
 * @property {() => void} [onNextPage]
 * - Optional callback triggered when the user scrolls to load the next page of items.
 *
 * @property {({ field: F; direction: 'ASC' | 'DESC' }) => void} [onOrderByChanged]
 * - Optional callback triggered when the user changes the sorting order of the list.
 *
 * @property {{ field: F; direction: 'ASC' | 'DESC' }} [orderBy]
 * - Optional object specifying the current sorting state of the list.
 *
 * @property {boolean} [hasMoreItems]
 * - Optional flag indicating if there are more items to load.
 *
 * @property {MenuItemsType<T>} [menu]
 * - Optional menu items to be displayed for each item in the list.
 *
 * @property {boolean} [displayMenuDiv]
 * - Optional flag to control whether the menu is displayed as a separate div.
 *
 * @property {string} [className]
 * - Optional CSS class name to apply additional styles to the list container.
 *
 * @property {Array<'selectAll' | 'unselectAll' | 'multiselect' | Array<'delete' & (() => void)>>} [keyboardShortcuts]
 * - Optional array of keyboard shortcut actions to be handled.
 *
 * @property {boolean} [disableKeyboardShortcuts]
 * - Optional flag to disable keyboard shortcuts for the list.
 *
 * @property {boolean} [disableItemCompositionStyles]
 * - Optional flag to disable custom styles for item composition.
 *
 * @property {() => void} [onMouseEnter]
 * - Optional callback triggered when the mouse enters the list.
 *
 * @property {() => void} [onMouseLeave]
 * - Optional callback triggered when the mouse leaves the list.
 *
 * @property {
 *              { onShiftFKeysPressed?: () => void; onRKeyPressed?: () => void; onBackspaceKeyPressed?: () => void }
 *           } [keyBoardShortcutActions]
 * - Optional object with custom actions for specific keyboard shortcuts like Shift+F, R, and Backspace.
 *
 * @returns {JSX.Element}
 * - The rendered list component.
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
    onCloseContextMenu();
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
          onClose={onCloseContextMenu}
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
            loader={loader}
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
            data-testid="outside-click-element"
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
