import { ArrowDown, ArrowUp } from '@phosphor-icons/react';
import Checkbox from '../checkbox/Checkbox';
import { MenuType } from '../contextMenu/ContextMenu';

export type HeaderProps<T, F> = {
  label: string;
  width: string;
} & (
  | { name: F; orderable: true; defaultDirection: 'ASC' | 'DESC'; buttonDataCy?: string; textDataCy?: string }
  | { name: keyof T; orderable: false }
);

interface ListHeaderProps<T, F> {
  selectedItems: T[];
  items: T[];
  header: HeaderProps<T, F>[];
  isVerticalScrollbarVisible: boolean | null;
  orderBy?: { field: F; direction: 'ASC' | 'DESC' };
  menu?: MenuType<T>;
  displayMenuDiv?: boolean;
  checkboxDataCy?: string;
  onTopSelectionCheckboxClick: () => void;
  onOrderableColumnClicked: (column: HeaderProps<T, F>) => void;
}

const ListHeader = <T, F extends keyof T>({
  selectedItems,
  onTopSelectionCheckboxClick,
  items,
  header,
  orderBy,
  onOrderableColumnClicked,
  menu,
  displayMenuDiv,
  isVerticalScrollbarVisible,
  checkboxDataCy,
}: ListHeaderProps<T, F>) => {
  return (
    <div className="flex h-12 shrink-0 flex-row px-5">
      {/* COLUMN */}
      <div className="flex h-full min-w-full flex-row items-center border-b border-gray-10">
        {/* SELECTION CHECKBOX */}
        <div className="flex h-full flex-row items-center justify-between pr-4">
          <Checkbox
            checked={selectedItems.length > 0}
            indeterminate={items.length > selectedItems.length && selectedItems.length > 0}
            onClick={onTopSelectionCheckboxClick}
            checkboxDataCy={checkboxDataCy}
          />
        </div>

        {header.map((column) => (
          <button
            onClick={
              column.orderable
                ? () => {
                    onOrderableColumnClicked(column);
                  }
                : undefined
            }
            key={column.name.toString()}
            data-cy={'buttonDataCy' in column && column?.buttonDataCy}
            className={`flex h-full shrink-0  flex-row items-center space-x-1.5 text-base font-medium text-gray-60  ${
              column.width
            } ${column.orderable ? 'cursor-pointer hover:text-gray-80' : ''}`}
          >
            <span data-cy={'textDataCy' in column && column?.textDataCy}>{column.label}</span>
            {column.name === orderBy?.field &&
              column.orderable &&
              (orderBy?.direction === 'ASC' ? (
                <ArrowUp size={14} weight="bold" />
              ) : (
                <ArrowDown size={14} weight="bold" />
              ))}
          </button>
        ))}
        {isVerticalScrollbarVisible && <div className="mr-15px" />}
        {(menu || displayMenuDiv) && <div className="flex h-full w-12 shrink-0" />}
      </div>
    </div>
  );
};

export default ListHeader;
