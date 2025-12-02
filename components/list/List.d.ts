import { ReactNode } from '../../../node_modules/react';
import { HeaderProps } from './ListHeader';
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
declare const List: <T extends {
    id: number;
}, F extends keyof T>({ header, checkboxDataCy, items, itemComposition, selectedItems, onClick, onDoubleClick, onEnterPressed, onSelectedItemsChanged, isLoading, forceLoading, skinSkeleton, emptyState, orderBy, onOrderByChanged, onNextPage, hasMoreItems, menu, displayMenuDiv, className, disableItemCompositionStyles, onMouseEnter, onMouseLeave, keyBoardShortcutActions, disableKeyboardShortcuts, }: ListProps<T, F>) => JSX.Element;
export default List;
