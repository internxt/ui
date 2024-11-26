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
