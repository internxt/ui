import React from 'react';
import { afterEach, describe, it, vi, expect, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import BreadcrumbsItem, { BreadcrumbItemData, BreadcrumbsItemProps } from '../BreadcrumbsItem';
import { useDrop } from 'react-dnd';

vi.mock('react-dnd', () => ({
  useDrop: vi.fn(),
}));

describe('BreadcrumbsItem Component', () => {
  const mockedUseDrop = useDrop as unknown as ReturnType<typeof vi.fn>;
  const onItemDroppedMock = vi.fn();
  const onClickMock = vi.fn();
  const dispatchMock = vi.fn();

  const breadcrumbItem: BreadcrumbItemData = {
    uuid: '1',
    label: 'Item 1',
    icon: null,
    active: true,
    isFirstPath: false,
    dialog: false,
    onClick: onClickMock,
  };

  const defaultProps: BreadcrumbsItemProps<typeof dispatchMock> = {
    item: breadcrumbItem,
    totalBreadcrumbsLength: 3,
    items: [breadcrumbItem],
    namePath: [{ name: 'Root', uuid: 'root' }],
    isSomeItemSelected: false,
    selectedItems: [],
    canItemDrop: vi.fn(() => () => true),
    onItemDropped: onItemDroppedMock,
    dispatch: dispatchMock,
    acceptedTypes: ['ITEM_TYPE'],
  };

  const renderBreadcrumbsItem = (props = {}) => render(<BreadcrumbsItem {...defaultProps} {...props} />);

  beforeEach(() => {
    mockedUseDrop.mockImplementation(() => [{ isOver: false, canDrop: false }, vi.fn()]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const breadcrumbsItem = renderBreadcrumbsItem();
    expect(breadcrumbsItem).toMatchSnapshot();
  });

  it('should render the component with correct data', () => {
    const { getByText } = renderBreadcrumbsItem();
    expect(getByText('Item 1')).toBeInTheDocument();
  });

  it('should call `onClick` when an active item is clicked', () => {
    const { getByText } = renderBreadcrumbsItem();
    const item = getByText('Item 1');
    fireEvent.click(item);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not call `onClick` if the item is not active', () => {
    const inactiveProps = {
      ...defaultProps,
      item: { ...breadcrumbItem, active: false },
    };
    const { getByText } = renderBreadcrumbsItem(inactiveProps);
    const item = getByText('Item 1');
    fireEvent.click(item);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('should apply the `drag-over-effect` class when `isOver` and `canDrop` are true', () => {
    mockedUseDrop.mockImplementation(() => [{ isOver: true, canDrop: true }, vi.fn()]);
    const { getByText } = renderBreadcrumbsItem();
    const item = getByText('Item 1');
    expect(item.parentElement).toHaveClass('drag-over-effect');
  });

  it('should render the menu if the item is neither active nor a dialog', () => {
    const menuMock = vi.fn(() => <div>Menu</div>);
    const menuProps = { ...defaultProps, menu: menuMock, item: { ...breadcrumbItem, active: false, dialog: false } };

    const { getByText } = renderBreadcrumbsItem(menuProps);
    expect(getByText('Menu')).toBeInTheDocument();
  });

  it('should handle `drop` correctly', async () => {
    const dropMock = vi.fn(() => Promise.resolve());
    mockedUseDrop.mockImplementation(() => [{ isOver: false, canDrop: true }, dropMock]);

    const { getByText } = renderBreadcrumbsItem();

    global.DragEvent = class extends Event {
      dataTransfer: DataTransfer | null = null;

      constructor(type: string, eventInitDict?: DragEventInit) {
        super(type, eventInitDict);
        this.dataTransfer = eventInitDict?.dataTransfer || null;
      }
    } as unknown as typeof DragEvent;

    const dropArea = getByText('Item 1').parentElement;
    if (dropArea && 'dispatchEvent' in dropArea) {
      const dropEvent = new DragEvent('drop', { bubbles: true });
      dropArea.dispatchEvent(dropEvent);
    }

    expect(dropMock).toHaveBeenCalledTimes(1);
  });

  it('should render an icon if provided', () => {
    const itemWithIcon = {
      ...breadcrumbItem,
      icon: <svg data-testid="icon" />,
    };
    const { getByTestId } = renderBreadcrumbsItem({ item: { ...itemWithIcon } });
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('should render `itemComponent` if provided', () => {
    const ItemComponentMock = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} data-testid="custom-icon" />;
    const { getByTestId } = renderBreadcrumbsItem({ itemComponent: ItemComponentMock });
    expect(getByTestId('custom-icon')).toBeInTheDocument();
  });
});
