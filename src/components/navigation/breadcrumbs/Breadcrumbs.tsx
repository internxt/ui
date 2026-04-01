import { CaretRight, DotsThree } from '@phosphor-icons/react';
import { forwardRef, FunctionComponent, ReactNode, SVGProps } from 'react';
import { Dispatch } from 'redux';
import Dropdown from '../dropdown/Dropdown';
import BreadcrumbsItem, { BreadcrumbItemData, BreadcrumbsMenuProps } from './BreadcrumbsItem';
import { DropTargetMonitor, useDrop } from 'react-dnd';

export interface BreadcrumbsProps<T extends Dispatch, U> {
  items: BreadcrumbItemData[];
  rootBreadcrumbItemDataCy?: string;
  menu?: (props: BreadcrumbsMenuProps) => JSX.Element;
  namePath: {
    name: string;
    uuid: string;
  }[];
  isSomeItemSelected: boolean;
  selectedItems: U[];
  onItemDropped: (
    item: BreadcrumbItemData,
    namePath: {
      name: string;
      uuid: string;
    }[],
    isSomeItemSelected: boolean,
    selectedItems: U[],
    dispatch: T,
  ) => (draggedItem: U, monitor: DropTargetMonitor) => Promise<void>;
  canItemDrop: (item: BreadcrumbItemData) => (draggedItem: U, monitor: DropTargetMonitor) => boolean;
  itemComponent?: FunctionComponent<SVGProps<SVGSVGElement>>;
  acceptedTypes: string[];
  dispatch: T;
  useDrop: typeof useDrop;
}

/**
 * Breadcrumbs component
 *
 * @property {BreadcrumbItemData[]} items
 * - Array of breadcrumb items to be displayed, each containing a label, icon, and other related properties.
 *
 * @property {string} [rootBreadcrumbItemDataCy]
 * - Custom `data-cy` attribute  applied to the root breadcrumb item.
 *
 * @property {Function} [menu]
 * - Optional custom menu component for rendering a dropdown menu for breadcrumb items that need additional actions
 * or options.
 *
 * @property {Object[]} namePath
 * - Array of objects representing the path and UUID of the breadcrumb item, used for handling navigation or selection.
 *
 * @property {boolean} isSomeItemSelected
 * - If true, indicates that some breadcrumb items are selected, affecting the display and behavior of the breadcrumbs.
 *
 * @property {any[]} selectedItems
 * - Array of selected breadcrumb items, used to manage the selection state and related actions.
 *
 * @property {Function} onItemDropped
 * - Callback function that is triggered when a breadcrumb item is dropped, used for handling drag-and-drop operations.
 *
 * @property {Function} canItemDrop
 * - Determines if a breadcrumb item can be dropped. Used for validating drop actions in the drag-and-drop interaction.
 *
 * @property {FunctionComponent<SVGProps<SVGSVGElement>>} [itemComponent]
 * - Optional custom component for rendering icons or other visual elements inside each breadcrumb item.
 *
 * @property {string[]} acceptedTypes
 * - Array of accepted drag-and-drop types for breadcrumb items,
 * specifying what types of items can be dragged and dropped.
 *
 * @property {Dispatch} dispatch
 * - The Redux dispatch function for dispatching actions related to the breadcrumb items.
 *
 * @property {Functiodn} useDrop
 * - Hook for dnd.
 */

const Breadcrumbs = <T extends Dispatch, U>(props: Readonly<BreadcrumbsProps<T, U>>): JSX.Element => {
  const MenuItem = forwardRef<HTMLDivElement, { children: ReactNode }>((props, ref) => {
    return (
      <div
        ref={ref}
        className="flex cursor-pointer items-center hover:bg-gray-5 hover:text-gray-80 dark:hover:bg-gray-10"
      >
        {props.children}
      </div>
    );
  });

  const getItemsList = (): JSX.Element[] => {
    const items = props.items;
    const itemsList = [] as JSX.Element[];
    const hiddenItemsList = [] as JSX.Element[];
    const breadcrumbSeparator = (key: React.Key) => {
      return (
        <div key={key} className="text-dgray-50 flex items-center">
          <CaretRight weight="bold" className="h-4 w-4" data-testid="caret-right" />
        </div>
      );
    };

    for (let i = 0; i < items.length; i++) {
      const separatorKey = 'breadcrumbSeparator-' + items[i].uuid + i.toString();
      const itemKey = 'breadcrumbItem-' + items[i].uuid + i.toString();

      if (items.length > 3 && i !== 0 && i < items.length - 2) {
        if (i === 1) {
          itemsList.push(breadcrumbSeparator(separatorKey));
        }
        hiddenItemsList.push(
          <MenuItem>
            <BreadcrumbsItem
              key={itemKey}
              item={items[i]}
              isHiddenInList
              totalBreadcrumbsLength={items.length}
              items={items}
              namePath={props.namePath}
              isSomeItemSelected={props.isSomeItemSelected}
              selectedItems={props.selectedItems}
              onItemDropped={props.onItemDropped}
              canItemDrop={props.canItemDrop}
              itemComponent={props.itemComponent}
              acceptedTypes={props.acceptedTypes}
              dispatch={props.dispatch}
              useDrop={props.useDrop}
            />
          </MenuItem>,
        );
      } else {
        itemsList.push(
          <BreadcrumbsItem
            breadcrumbButtonDataCy={i === 0 ? props?.rootBreadcrumbItemDataCy : undefined}
            key={itemKey}
            item={items[i]}
            totalBreadcrumbsLength={items.length}
            items={items}
            menu={props.menu}
            namePath={props.namePath}
            isSomeItemSelected={props.isSomeItemSelected}
            selectedItems={props.selectedItems}
            onItemDropped={props.onItemDropped}
            canItemDrop={props.canItemDrop}
            acceptedTypes={props.acceptedTypes}
            dispatch={props.dispatch}
            useDrop={props.useDrop}
          />,
        );
        if (i < items.length - 1) {
          itemsList.push(breadcrumbSeparator(separatorKey));
        }
      }
    }

    if (hiddenItemsList.length > 0) {
      const menu = (
        <Dropdown
          key="breadcrumbDropdownItems"
          openDirection="left"
          classMenuItems="left-0 top-1 w-max max-h-80 overflow-y-auto
          rounded-md border border-gray-10 bg-surface dark:bg-gray-5 shadow-subtle-hard z-10"
          menuItems={hiddenItemsList}
        >
          {({ open }: { open: boolean }) => {
            return (
              <div
                className={`flex h-8 w-8 items-center justify-center
                rounded-full text-gray-60 transition-all duration-75 ease-in-out hover:bg-gray-5 hover:text-gray-80 ${
                  open ? 'bg-gray-5' : ''
                }`}
              >
                <DotsThree weight="bold" className="h-5 w-5" />
              </div>
            );
          }}
        </Dropdown>
      );
      itemsList.splice(2, 0, menu);
    }

    return itemsList;
  };

  return <div className="flex w-full items-center">{getItemsList()}</div>;
};

export default Breadcrumbs;
