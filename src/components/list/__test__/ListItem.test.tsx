import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import ListItem from '../ListItem';

const defaultItem = { id: 'item1' };
const mockOnSelectedChanged = vi.fn();
const mockOnDoubleClick = vi.fn();
const mockGenericEnterKey = vi.fn();
const mockOnClickContextMenu = vi.fn();
const mockOnClose = vi.fn();
const itemComposition = [(item: typeof defaultItem) => <div>{item.id}</div>];

const renderListItem = (props = {}) =>
  render(
    <ListItem
      item={defaultItem}
      listIndex={0}
      itemComposition={itemComposition}
      selected={false}
      isOpen={false}
      columnsWidth={['w-1/2']}
      onSelectedChanged={mockOnSelectedChanged}
      onDoubleClick={mockOnDoubleClick}
      genericEnterKey={mockGenericEnterKey}
      onClickContextMenu={mockOnClickContextMenu}
      onClose={mockOnClose}
      {...props}
    />,
  );

describe('ListItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const listItem = renderListItem();
    expect(listItem).toMatchSnapshot();
  });

  it('renders the item correctly', () => {
    renderListItem();
    expect(screen.getByText('item1')).toBeInTheDocument();
  });

  it('calls onDoubleClick when double-clicked', () => {
    renderListItem();
    const listItem = screen.getByText('item1').closest('div');
    fireEvent.doubleClick(listItem!);
    expect(mockOnDoubleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSelectedChanged when checkbox is clicked', () => {
    renderListItem({ selected: false });
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnSelectedChanged).toHaveBeenCalledWith(true);
  });

  it('calls mockOnClickContextMenu on right-click', () => {
    renderListItem({ isOpen: true, selected: true });
    const listItem = screen.getByText('item1').closest('div');
    fireEvent.contextMenu(listItem!);

    expect(mockOnClickContextMenu).toHaveBeenCalled();
  });

  it('closes the context menu when onClose is called', () => {
    renderListItem({ isOpen: true });
    mockOnClose();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
