import { MenuItemsType } from '../menu/Menu';

export type HeaderProps<T, F> = {
    label: string;
    width: string;
} & ({
    name: F;
    orderable: true;
    defaultDirection: 'ASC' | 'DESC';
    buttonDataCy?: string;
    textDataCy?: string;
} | {
    name: keyof T;
    orderable: false;
});
interface ListHeaderProps<T, F> {
    selectedItems: T[];
    items: T[];
    header: HeaderProps<T, F>[];
    isVerticalScrollbarVisible: boolean | null;
    orderBy?: {
        field: F;
        direction: 'ASC' | 'DESC';
    };
    menu?: MenuItemsType<T>;
    displayMenuDiv?: boolean;
    checkboxDataCy?: string;
    onTopSelectionCheckboxClick: () => void;
    onOrderableColumnClicked: (column: HeaderProps<T, F>) => void;
    onClose?: () => void;
}
declare const ListHeader: <T, F extends keyof T>({ selectedItems, onTopSelectionCheckboxClick, items, header, orderBy, onOrderableColumnClicked, menu, displayMenuDiv, isVerticalScrollbarVisible, checkboxDataCy, onClose, }: ListHeaderProps<T, F>) => import("react/jsx-runtime").JSX.Element;
export default ListHeader;
