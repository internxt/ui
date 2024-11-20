import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect, afterEach } from 'vitest';
import Dialog from '../Dialog';

describe('Dialog', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    onPrimaryAction: vi.fn(),
    onSecondaryAction: vi.fn(),
    title: 'Dialog Title',
    subtitle: 'Dialog Subtitle',
    primaryAction: 'Confirm',
    secondaryAction: 'Cancel',
    primaryActionColor: 'primary' as const,
    isLoading: false,
  };

  const renderDialog = (props = {}) => render(<Dialog {...defaultProps} {...props} />);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = renderDialog();
    expect(container).toMatchSnapshot();
  });

  it('renders dialog content when open', () => {
    const { getByText } = renderDialog();
    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.subtitle)).toBeInTheDocument();
  });

  it('does not render dialog content when closed', () => {
    const { queryByText } = renderDialog({ isOpen: false });
    expect(queryByText(defaultProps.title)).not.toBeInTheDocument();
  });

  it('calls onClose when clicking outside the dialog', () => {
    const { getByTestId } = renderDialog();
    fireEvent.click(getByTestId('dialog-overlay'));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onClose when pressing Escape', () => {
    renderDialog();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onPrimaryAction when clicking the primary button', () => {
    const { getByText } = renderDialog();
    fireEvent.click(getByText(defaultProps.primaryAction));
    expect(defaultProps.onPrimaryAction).toHaveBeenCalled();
  });

  it('calls onSecondaryAction when clicking the secondary button', () => {
    const { getByText } = renderDialog();
    fireEvent.click(getByText(defaultProps.secondaryAction));
    expect(defaultProps.onSecondaryAction).toHaveBeenCalled();
  });

  it('disables buttons when isLoading is true', () => {
    const { getAllByRole } = renderDialog({ isLoading: true });
    const elements = getAllByRole('button');
    screen.debug();
    expect(elements[0]).toBeDisabled();
    expect(elements[1]).toBeDisabled();
  });

  it('applies correct classes for primaryActionColor', () => {
    const { getAllByRole } = renderDialog({ primaryActionColor: 'danger' });
    const elements = getAllByRole('button');
    expect(elements[1]).toHaveClass('bg-red', 'active:bg-red-dark', 'text-white', 'shadow-sm');
  });
});
