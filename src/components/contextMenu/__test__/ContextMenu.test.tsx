import { render, fireEvent, screen } from '@testing-library/react';
import ContextMenu, { ContextMenuProps, MenuItemType } from '../ContextMenu';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';

interface TestItem {
  name: string;
}

describe('ContextMenu Component', () => {
  const props: ContextMenuProps<TestItem> = {
    item: { name: 'Test Item' },
    menuItemsRef: { current: null },
    menu: [
      { name: 'Option 1', action: vi.fn() },
      { name: 'Option 2', action: vi.fn(), disabled: () => false },
      { separator: true },
      { name: 'Option 3', action: vi.fn() },
    ],
    openedFromRightClick: true,
    posX: 100,
    posY: 100,
    isContextMenuCutOff: false,
    genericEnterKey: vi.fn(),
    handleMenuClose: vi.fn(),
  };

  const renderContextMenu = () => {
    return render(<ContextMenu {...props} />);
  };

  beforeEach(() => {});

  it('should match snapshot', () => {
    const contextMenu = renderContextMenu();
    expect(contextMenu).toMatchSnapshot();
  });

  it('renders menu items correctly', () => {
    renderContextMenu();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('calls action and handleMenuClose on item click', () => {
    render(<ContextMenu {...props} />);
    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);
    const menuItem = props.menu?.[0];
    expect(menuItem && 'action' in menuItem).toBeTruthy();
    if (menuItem && 'action' in menuItem) expect(menuItem?.action).toHaveBeenCalledWith(props.item);
    expect(props.handleMenuClose).toHaveBeenCalled();
  });

  it('does not call action if the item is disabled', () => {
    const disabledMenu: MenuItemType<TestItem> = {
      name: 'Disabled Option',
      action: vi.fn(),
      disabled: () => true,
    };
    props.menu?.push(disabledMenu);
    render(<ContextMenu {...props} />);
    const disabledOption = screen.getByText('Disabled Option');
    fireEvent.click(disabledOption);
    expect(disabledMenu.action).not.toHaveBeenCalled();
  });

  it('calls genericEnterKey when Enter is pressed without selection', () => {
    render(<ContextMenu {...props} />);
    fireEvent.keyDown(window, { key: 'Enter' });
    expect(props.genericEnterKey).toHaveBeenCalled();
    expect(props.handleMenuClose).toHaveBeenCalled();
  });

  it('navigates through items with ArrowDown and ArrowUp keys', () => {
    render(<ContextMenu {...props} />);
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    expect(screen.getByText('Option 1').parentElement?.parentElement).toHaveClass('dark:bg-gray-10');
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    expect(screen.getByText('Option 2').parentElement?.parentElement).toHaveClass('dark:bg-gray-10');
    fireEvent.keyDown(window, { key: 'ArrowUp' });
    expect(screen.getByText('Option 1').parentElement?.parentElement).toHaveClass('dark:bg-gray-10');
  });

  it('calls action and handleMenuClose on Enter key with an item selected', () => {
    render(<ContextMenu {...props} />);
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'Enter' });
    const menuItem = props.menu?.[0];
    expect(menuItem && 'action' in menuItem).toBeTruthy();
    if (menuItem && 'action' in menuItem) expect(menuItem?.action).toHaveBeenCalledWith(props.item);
    expect(props.handleMenuClose).toHaveBeenCalled();
  });
});
