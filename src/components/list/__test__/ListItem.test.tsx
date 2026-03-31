import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import ListItem from '../ListItem';

const defaultItem = { id: 1 };
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
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calls onDoubleClick when double-clicked', () => {
    renderListItem();
    const listItem = screen.getByText('1').closest('div');
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
    const listItem = screen.getByText('1').closest('div');
    fireEvent.contextMenu(listItem!);

    expect(mockOnClickContextMenu).toHaveBeenCalled();
  });

  it('updates dimensions when menuItemsRef size changes', () => {
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 100 });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 100 });

    renderListItem({ isOpen: true, selected: true });

    if (originalOffsetWidth) Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
    if (originalOffsetHeight) Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
  });

  it('handles contextMenu positioning near screen edges', () => {
    renderListItem({ isOpen: true, selected: true });
    const listItem = screen.getByText('1').closest('div');
    
    fireEvent.contextMenu(listItem!, { 
      clientX: window.innerWidth + 300, 
      clientY: Math.max(window.innerHeight, 500) + 300 
    });
    
    expect(mockOnClickContextMenu).toHaveBeenCalled();
  });

  it('closes the context menu when onClose is called', () => {
    renderListItem({ isOpen: true });
    mockOnClose();
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should handle contextMenuDotsButton', () => {
    const mockOnThreeDotsButtonPressed = vi.fn();
    const { getByRole } = renderListItem({ isOpen: true, onThreeDotsButtonPressed: mockOnThreeDotsButtonPressed });
    const dotsButton = getByRole('button');
    fireEvent.click(dotsButton);
    expect(mockOnThreeDotsButtonPressed).toHaveBeenCalledTimes(1);
  });

  it('should call genericEnterKey when isOpen is false', () => {
    const genericEnterKeyMock = vi.fn();
    const { container } = renderListItem({ isOpen: false, genericEnterKey: genericEnterKeyMock });

    fireEvent.keyDown(container, { key: 'Enter', code: 'Enter' });

    expect(genericEnterKeyMock).toHaveBeenCalled();
  });

  it('should not call genericEnterKey when isOpen is true', () => {
    const genericEnterKeyMock = vi.fn();
    const { container } = renderListItem({ isOpen: true, genericEnterKey: genericEnterKeyMock });

    fireEvent.keyDown(container, { key: 'Enter', code: 'Enter' });

    expect(genericEnterKeyMock).not.toHaveBeenCalled();
  });

  it('should call onClose when handleMenuClose is called', () => {
    const onCloseMock = vi.fn();
    const { container } = renderListItem({ isOpen: true, onClose: onCloseMock });

    fireEvent.keyDown(container, { key: 'r', code: 'r' });

    expect(onCloseMock).toHaveBeenCalled();
  });
});
