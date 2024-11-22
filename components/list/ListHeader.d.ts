import { MenuType } from '../contextMenu/ContextMenu';

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
    menu?: MenuType<T>;
    displayMenuDiv?: boolean;
    checkboxDataCy?: string;
    onTopSelectionCheckboxClick: () => void;
    onOrderableColumnClicked: (column: HeaderProps<T, F>) => void;
}
declare const ListHeader: <T, F extends keyof T>({ selectedItems, onTopSelectionCheckboxClick, items, header, orderBy, onOrderableColumnClicked, menu, displayMenuDiv, isVerticalScrollbarVisible, checkboxDataCy, }: ListHeaderProps<T, F>) => import("react/jsx-runtime").JSX.Element;
export default ListHeader;
