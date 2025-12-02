import { FunctionComponent, SVGProps } from '../../../node_modules/react';
import { Dispatch } from 'redux';
import { BreadcrumbItemData, BreadcrumbsMenuProps } from './BreadcrumbsItem';
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
    onItemDropped: (item: BreadcrumbItemData, namePath: {
        name: string;
        uuid: string;
    }[], isSomeItemSelected: boolean, selectedItems: U[], dispatch: T) => (draggedItem: U, monitor: DropTargetMonitor) => Promise<void>;
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
declare const Breadcrumbs: <T extends Dispatch, U>(props: Readonly<BreadcrumbsProps<T, U>>) => JSX.Element;
export default Breadcrumbs;
