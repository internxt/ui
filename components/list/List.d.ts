import { ReactNode } from '../../../node_modules/react';
import { MenuType } from '../contextMenu/ContextMenu';
import { HeaderProps } from './ListHeader';

export interface ListProps<T, F> {
    header: HeaderProps<T, F>[];
    checkboxDataCy?: string;
    items: T[];
    itemComposition: Array<(props: T) => JSX.Element>;
    selectedItems: T[];
    onClick?: (props: T) => void;
    onDoubleClick?: (props: T) => void;
    onEnterPressed?: (props: T) => void;
    onSelectedItemsChanged: (changes: {
        props: T;
        value: boolean;
    }[]) => void;
    isLoading?: boolean;
    forceLoading?: boolean;
    skinSkeleton?: Array<JSX.Element>;
    emptyState?: ReactNode;
    onNextPage?: () => void;
    onOrderByChanged?: (value: {
        field: F;
        direction: 'ASC' | 'DESC';
    }) => void;
    orderBy?: {
        field: F;
        direction: 'ASC' | 'DESC';
    };
    hasMoreItems?: boolean;
    menu?: MenuType<T>;
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
declare const List: <T extends {
    id: number;
}, F extends keyof T>({ header, checkboxDataCy, items, itemComposition, selectedItems, onClick, onDoubleClick, onEnterPressed, onSelectedItemsChanged, isLoading, forceLoading, skinSkeleton, emptyState, orderBy, onOrderByChanged, onNextPage, hasMoreItems, menu, displayMenuDiv, className, disableItemCompositionStyles, onMouseEnter, onMouseLeave, keyBoardShortcutActions, disableKeyboardShortcuts, }: ListProps<T, F>) => JSX.Element;
export default List;
