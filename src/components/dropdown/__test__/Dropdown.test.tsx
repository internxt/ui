import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Dropdown from '../Dropdown';

describe('Dropdown component', () => {
  const handleClick1 = vi.fn();
  const handleClick2 = vi.fn();
  const options = [
    { text: 'Option 1', onClick: handleClick1, disabled: () => false },
    { text: 'Option 2', onClick: handleClick2, disabled: () => true },
  ];
  const mockAction = vi.fn();
  const dropdownActionsContext = [
    {
      name: 'Action 1',
      action: mockAction,
      separator: false,
    },
  ];
  const renderDropdown = () => {
    return render(
      <Dropdown
        openDirection="left"
        classMenuItems="menu"
        classButton="button"
        options={options}
        dropdownActionsContext={dropdownActionsContext}
        item={{}}
      >
        Dropdown
      </Dropdown>,
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot when isOpen is true', () => {
    const { container } = renderDropdown();
    expect(container).toMatchSnapshot();
  });

  it('should toggle menu open and close on button click', async () => {
    const { getByTestId, getByRole } = renderDropdown();

    const button = getByRole('button');
    const menu = getByTestId('menu-dropdown');

    expect(menu).toHaveClass('opacity-0');
    expect(menu).toHaveClass('scale-95');

    fireEvent.click(button);

    await waitFor(() => {
      expect(menu).not.toHaveClass('opacity-0');
      expect(menu).not.toHaveClass('scale-95');
      expect(menu).toHaveClass('opacity-100');
      expect(menu).toHaveClass('scale-100');
    });

    fireEvent.click(button);

    await waitFor(() => {
      expect(menu).toHaveClass('opacity-0');
      expect(menu).toHaveClass('scale-95');
    });
  });

  it('should render menu options correctly', () => {
    const { getByText, getByRole } = renderDropdown();

    fireEvent.click(getByRole('button'));

    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
  });

  it('should call onClick when an option is clicked', async () => {
    const { getByRole, getByText } = renderDropdown();

    fireEvent.click(getByRole('button'));
    fireEvent.click(getByText('Option 1'));

    await waitFor(() => expect(handleClick1).toHaveBeenCalledTimes(1));
  });

  it('should close the menu after selecting an option', async () => {
    const { getByRole, getByText, getByTestId } = renderDropdown();

    fireEvent.click(getByRole('button'));
    fireEvent.click(getByText('Option 1'));

    const menu = getByTestId('menu-dropdown');

    await waitFor(() => {
      expect(menu).not.toHaveClass('opacity-100');
      expect(menu).not.toHaveClass('scale-100');
      expect(menu).toHaveClass('opacity-0');
      expect(menu).toHaveClass('scale-95');
    });
  });

  it('should render dropdownActionsContext correctly', async () => {
    const { getByRole, getByText } = renderDropdown();

    fireEvent.click(getByRole('button'));

    expect(getByText('Action 1')).toBeInTheDocument();

    fireEvent.click(getByText('Action 1'));

    await waitFor(() => expect(mockAction).toHaveBeenCalledTimes(1));
  });

  it('should navigate through items with ArrowDown and ArrowUp keys', async () => {
    const { getByRole, getByText } = renderDropdown();

    fireEvent.click(getByRole('button'));

    fireEvent.keyDown(window, { key: 'ArrowDown' });

    const firstOption = getByText('Option 1');
    const secondOption = getByText('Option 2');

    expect(firstOption).toHaveClass('bg-gray-5 text-gray-100');
    expect(secondOption).not.toHaveClass('bg-gray-5 text-gray-100');

    fireEvent.keyDown(window, { key: 'ArrowDown' });
    expect(firstOption).not.toHaveClass('bg-gray-5 text-gray-100');
    expect(secondOption).toHaveClass('bg-gray-5 text-gray-100');

    fireEvent.keyDown(window, { key: 'ArrowUp' });
    expect(firstOption).toHaveClass('bg-gray-5 text-gray-100');
    expect(secondOption).not.toHaveClass('bg-gray-5 text-gray-100');
  });

  it('should trigger the onClick handler when Enter is pressed on an item', async () => {
    const { getByRole } = renderDropdown();

    fireEvent.click(getByRole('button'));
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'Enter' });

    expect(handleClick1).toHaveBeenCalledTimes(1);
  });

  it('should close the menu after selecting an option with Enter', async () => {
    const { getByRole, getByTestId } = renderDropdown();

    fireEvent.click(getByRole('button'));
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'Enter' });

    const menu = getByTestId('menu-dropdown');
    expect(menu).toHaveClass('scale-95 opacity-0');
  });
});
