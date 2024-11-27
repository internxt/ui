import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Dispatch } from 'redux';
import { FunctionComponent, SVGProps } from 'react';

export interface BreadcrumbItemData {
  uuid: string;
  label: string;
  icon: JSX.Element | null;
  active: boolean;
  isFirstPath?: boolean;
  dialog?: boolean;
  isBackup?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsMenuProps {
  item: BreadcrumbItemData;
  items: BreadcrumbItemData[];
  onItemClicked: (item: BreadcrumbItemData) => void;
}

/**
 * BreadcrumbsItem component
 *
 * @property {BreadcrumbItemData} item
 * - Data representing a single breadcrumb item, including label, icon, and other properties.
 *
 * @property {number} totalBreadcrumbsLength
 * - The total number of breadcrumb items, used for styling the first item and determining when to apply certain styles.
 *
 * @property {boolean} [isHiddenInList]
 * - If true, the breadcrumb is hidden in the list and only shown in a dropdown menu.
 *
 * @property {BreadcrumbItemData[]} items
 * - Array of all breadcrumb items, used for rendering all the breadcrumbs and their separators.
 *
 * @property {string} [breadcrumbButtonDataCy]
 * - Custom `data-cy` attribute applied to the breadcrumb button element.
 *
 * @property {FunctionComponent<BreadcrumbsMenuProps>} [menu]
 * - A custom menu component that can be shown for the breadcrumb item when it's not active or dialog-based.
 *
 * @property {Object[]} namePath
 * - Array of objects representing the path and UUID of the breadcrumb item.
 *
 * @property {boolean} isSomeItemSelected
 * - If true, indicates that at least one breadcrumb item is selected, affecting styling or behavior.
 *
 * @property {any[]} selectedItems
 * - Array of selected breadcrumb items, used to manage selected states and actions.
 *
 * @property {Function} onItemDropped
 * - Callback function that is triggered when a breadcrumb item is dropped.
 *
 * @property {Function} canItemDrop
 * - Determines if a breadcrumb item can be dropped. Used for validation during drag-and-drop operations.
 *
 * @property {FunctionComponent<SVGProps<SVGSVGElement>>} [itemComponent]
 * - Optional custom component for rendering an icon or other visual elements within the breadcrumb item.
 *
 * @property {string[]} acceptedTypes
 * - List of accepted drag-and-drop types for the breadcrumb item.
 *
 * @property {Dispatch} dispatch
 * - The Redux dispatch function for dispatching actions related to the breadcrumb item.
 */

export interface BreadcrumbsItemProps<T extends Dispatch> {
  item: BreadcrumbItemData;
  totalBreadcrumbsLength: number;
  isHiddenInList?: boolean;
  items: BreadcrumbItemData[];
  breadcrumbButtonDataCy?: string;
  menu?: (props: BreadcrumbsMenuProps) => JSX.Element;
  namePath: {
    name: string;
    uuid: string;
  }[];
  isSomeItemSelected: boolean;
  selectedItems: [];
  onItemDropped: (
    item: BreadcrumbItemData,
    namePath: {
      name: string;
      uuid: string;
    }[],
    isSomeItemSelected: boolean,
    selectedItems: [],
    dispatch: T,
  ) => (draggedItem: unknown, monitor: DropTargetMonitor) => Promise<void>;
  canItemDrop: (
    item: BreadcrumbItemData,
  ) => (draggedItem: unknown, monitor: DropTargetMonitor<unknown, unknown>) => boolean;
  itemComponent?: FunctionComponent<SVGProps<SVGSVGElement>>;
  acceptedTypes: string[];
  dispatch: T;
}

const BreadcrumbsItem = <T extends Dispatch>(props: BreadcrumbsItemProps<T>): JSX.Element => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: props.acceptedTypes,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
      canDrop: props.canItemDrop(props.item),
      drop: props.onItemDropped(
        props.item,
        props.namePath,
        props.isSomeItemSelected,
        props.selectedItems,
        props.dispatch,
      ),
    }),
    [props.selectedItems],
  );

  const onItemClicked = (item: BreadcrumbItemData): void => {
    if (item.active) {
      item.onClick && item.onClick();
    }
  };
  const isDraggingOverClassNames = isOver && canDrop ? 'drag-over-effect' : '';

  return (
    <>
      {!props.item.active && !props.item.dialog && props.menu ? (
        <props.menu item={props.item} items={props.items} onItemClicked={onItemClicked} />
      ) : (
        <div
          ref={drop}
          className={`flex ${props.isHiddenInList ? 'w-full' : 'max-w-fit'} ${
            props.item.isFirstPath ? 'shrink-0 pr-1' : 'min-w-breadcrumb flex-1 px-1.5 py-1.5'
          } cursor-pointer flex-row items-center truncate font-medium ${isDraggingOverClassNames}
        ${
          !props.item.active || (props.item.isFirstPath && props.totalBreadcrumbsLength === 1)
            ? 'text-gray-80'
            : 'text-gray-50 hover:text-gray-80'
        }`}
          key={props.item.uuid}
          onClick={() => onItemClicked(props.item)}
          onKeyDown={() => {}}
          data-cy={props?.breadcrumbButtonDataCy}
        >
          {props.itemComponent && <props.itemComponent className="h-5 w-5" />}
          {props.item.icon ? props.item.icon : null}
          {props.item.label ? (
            <span
              className={`max-w-sm flex-1 cursor-pointer truncate ${props.isHiddenInList && 'pl-3 text-base'}`}
              title={props.item.label}
            >
              {props.item.label}
            </span>
          ) : null}
        </div>
      )}
    </>
  );
};

export default BreadcrumbsItem;
