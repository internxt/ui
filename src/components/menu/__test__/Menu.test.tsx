import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Menu, { MenuProps, MenuItemsType } from '../Menu';

const MockIcon = React.forwardRef<HTMLDivElement, { size?: number | string }>(({ size = 20 }, ref) => (
  <div ref={ref} data-testid="mock-icon" style={{ width: size, height: size }} />
));

describe('Menu Component', () => {
  const handleMenuClose = vi.fn();
  const genericEnterKey = vi.fn();

  const menuItems: MenuItemsType<{ id: number; name: string }> = [
    { name: 'Option 1', action: vi.fn() },
    { separator: true },
    { name: 'Option 2', disabled: () => true, action: vi.fn() },
    { name: 'Option 3', isTitle: () => true },
    {
      name: 'Option 4',
      action: vi.fn(),
      icon: MockIcon,
      keyboardShortcutOptions: {
        keyboardShortcutText: 'Ctrl+O',
      },
    },
  ];

  const defaultProps: MenuProps<{ id: number; name: string }> = {
    item: { id: 1, name: 'Sample Item' },
    menu: menuItems,
    handleMenuClose,
    genericEnterKey,
  };

  const renderMenu = () => render(<Menu {...defaultProps} />);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = renderMenu();
    expect(container).toMatchSnapshot();
  });

  it('renders all menu items', () => {
    const { getByText } = renderMenu();
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();
    expect(getByText('Option 4')).toBeInTheDocument();
  });

  it('renders separators', () => {
    const { container } = renderMenu();
    const separators = container.querySelectorAll('.h-px.bg-gray-10');
    expect(separators.length).toBe(1);
  });

  it('renders icons and keyboard shortcuts', () => {
    const { getByText, getByTestId } = renderMenu();
    expect(getByTestId('mock-icon')).toBeInTheDocument();
    expect(getByText('Ctrl+O')).toBeInTheDocument();
  });

  it('disables items correctly', () => {
    const { getByText } = renderMenu();
    const option2 = getByText('Option 2').parentElement?.parentElement?.parentElement;
    expect(option2).toHaveClass('pointer-events-none');
  });

  it('marks items as titles correctly', () => {
    const { getByText } = renderMenu();
    const option3 = getByText('Option 3').parentElement?.parentElement;
    expect(option3).toHaveClass('font-medium');
  });

  it('handles item click events', () => {
    const { getByText } = renderMenu();
    const option1 = getByText('Option 1');
    fireEvent.click(option1);
    expect('action' in menuItems[0] && menuItems[0].action).toHaveBeenCalled();
    expect(handleMenuClose).toHaveBeenCalled();
  });

  it('ignores clicks on disabled items', () => {
    const { getByText } = renderMenu();
    const option2 = getByText('Option 2');
    fireEvent.click(option2);
    expect(handleMenuClose).not.toHaveBeenCalled();
  });

  it('navigates menu with arrow keys', () => {
    const { getByText } = renderMenu();
    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyDown(document, { key: 'ArrowDown' });
    const option4 = getByText('Option 4').parentElement?.parentElement;
    expect(option4).toHaveClass('bg-gray-5');

    fireEvent.keyDown(document, { key: 'ArrowUp' });
    const option1 = getByText('Option 1').parentElement?.parentElement;
    expect(option1).toHaveClass('bg-gray-5');
  });

  it('selects an item with Enter key', () => {
    renderMenu();
    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyDown(document, { key: 'Enter' });
    expect('action' in menuItems[0] && menuItems[0].action).toHaveBeenCalled();
    expect(handleMenuClose).toHaveBeenCalled();
  });

  it('calls genericEnterKey if no item is selected', () => {
    renderMenu();
    fireEvent.keyDown(document, { key: 'Enter' });
    expect(genericEnterKey).toHaveBeenCalled();
  });
});
