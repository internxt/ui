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
declare const ListItem: <T extends {
    id: number;
}>({ item, listIndex, itemComposition, selected, isOpen, columnsWidth, onClose, onSelectedChanged, onDoubleClick, onClick, onClickContextMenu, onThreeDotsButtonPressed, disableItemCompositionStyles, menu, onMouseEnter, onMouseLeave, genericEnterKey, }: ListItemProps<T>) => JSX.Element;
export default ListItem;
