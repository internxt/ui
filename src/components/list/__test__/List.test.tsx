import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import List from '../List';
import { HeaderProps } from '../ListHeader';

const mockOnClick = vi.fn();
const mockOnDoubleClick = vi.fn();
const mockOnSelectedItemsChanged = vi.fn();
const mockOnNextPage = vi.fn();
const mockOnOrderByChanged = vi.fn();

type Item = {
  id: string;
  name: string;
  age: number;
};

const header: HeaderProps<Item, keyof Item>[] = [
  { label: 'Name', width: '100px', name: 'name', orderable: true, defaultDirection: 'ASC' },
  { label: 'Age', width: '50px', name: 'age', orderable: true, defaultDirection: 'ASC' },
];

const items = [
  { id: 1, name: 'Item 1', age: 25 },
  { id: 2, name: 'Item 2', age: 30 },
];

const selectedItems = [{ id: 1, name: 'Item 1', age: 25 }];
const itemComposition = [(props: { name: string }) => <div>{props.name}</div>];

const emptyState = <div>No items to display</div>;

const menu = [
  { name: 'Option 1', action: () => {} },
  { name: 'Option 2', action: () => {} },
];

const defaultProps = {
  header,
  items,
  itemComposition,
  selectedItems,
  emptyState,
  menu,
  onSelectedItemsChanged: mockOnSelectedItemsChanged,
  onClick: mockOnClick,
  onDoubleClick: mockOnDoubleClick,
  onNextPage: mockOnNextPage,
  onOrderByChanged: mockOnOrderByChanged,
};

const selectedAllItemsMock = [
  {
    props: {
      age: 25,
      id: 1,
      name: 'Item 1',
    },
    value: true,
  },
  {
    props: {
      age: 30,
      id: 2,
      name: 'Item 2',
    },
    value: true,
  },
];

const unSelectedAllItemsMock = [
  {
    props: {
      age: 25,
      id: 1,
      name: 'Item 1',
    },
    value: false,
  },
  {
    props: {
      age: 30,
      id: 2,
      name: 'Item 2',
    },
    value: false,
  },
];

const renderList = (props = {}) => render(<List {...defaultProps} {...props} />);
beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('List component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const list = renderList();
    expect(list).toMatchSnapshot();
  });

  it('renders the list header correctly', () => {
    const { getByText } = renderList();

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
  });

  it('renders items in the list', () => {
    const { getByText } = renderList();

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('calls onDoubleClick when an item is double clicked', () => {
    const { getByText } = renderList();

    const item = getByText('Item 1');
    fireEvent.doubleClick(item);

    expect(mockOnDoubleClick).toHaveBeenCalledWith(items[0]);
  });

  it('calls onSelectedItemsChanged when an item is selected', () => {
    const { getAllByRole } = renderList();

    const checkbox = getAllByRole('checkbox');
    fireEvent.click(checkbox[1]);

    expect(mockOnSelectedItemsChanged).toHaveBeenCalled();
  });

  it('calls onNextPage when intersection is detected and hasMoreItems is true', async () => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((callback) => ({
        observe: () => {
          callback([{ isIntersecting: true }]);
        },
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    renderList({ hasMoreItems: true });

    await waitFor(() => {
      expect(mockOnNextPage).toHaveBeenCalled();
    });
  });

  it('not to be called onNextPage when intersection is detected and hasMoreItems is false', async () => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((callback) => ({
        observe: () => {
          callback([{ isIntersecting: true }]);
        },
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    renderList({ hasMoreItems: false });

    await waitFor(() => {
      expect(mockOnNextPage).not.toHaveBeenCalled();
    });
  });

  it('renders empty state when there are no items and no more items to load', () => {
    const { getByText } = renderList({ items: [], hasMoreItems: false });

    const emptyState = getByText('No items to display');
    expect(emptyState).toBeInTheDocument();
  });

  it('calls onOrderByChanged when a sortable column header is clicked', () => {
    const { getByText } = renderList();

    const nameHeader = getByText('Name');
    fireEvent.click(nameHeader);

    expect(mockOnOrderByChanged).toHaveBeenCalled();
  });

  it('selects all items when select all checkbox is clicked', () => {
    const { getAllByRole } = renderList();

    const selectAllCheckbox = getAllByRole('checkbox');
    fireEvent.click(selectAllCheckbox[0]);

    expect(mockOnSelectedItemsChanged).toBeCalledWith(selectedAllItemsMock);
  });

  it('unselects all items when unselect all is clicked', () => {
    const { getAllByRole } = renderList({ selectedItems: items });

    const selectAllCheckbox = getAllByRole('checkbox');
    fireEvent.click(selectAllCheckbox[0]);

    expect(mockOnSelectedItemsChanged).toBeCalledWith(unSelectedAllItemsMock);
  });

  it('unselects all items when clicked outside the list', () => {
    const { container } = renderList({ selectedItems: items });

    const outsideListElement = container.getElementsByClassName('h-full w-full py-6')[0];
    expect(outsideListElement).toBeInTheDocument();

    fireEvent.click(outsideListElement);

    expect(mockOnSelectedItemsChanged).toBeCalledWith(unSelectedAllItemsMock);
  });

  it('handles keyboard shortcuts for select all (Ctrl+A)', () => {
    const { container } = renderList({ disableKeyboardShortcuts: false });

    fireEvent.keyDown(container, { key: 'a', ctrlKey: true });

    expect(mockOnSelectedItemsChanged).toBeCalledWith(selectedAllItemsMock);
  });

  it('does not trigger select all if keyboard shortcuts are disabled', () => {
    const { container } = renderList({ disableKeyboardShortcuts: true });

    fireEvent.keyDown(container, { key: 'a', ctrlKey: true });

    expect(mockOnSelectedItemsChanged).not.toHaveBeenCalled();
  });
});
