import React from 'react';
import { IconProps } from '@phosphor-icons/react';
import { render, fireEvent, act } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import SidenavItem from '../SidenavItem';

const MockIcon = React.forwardRef<SVGSVGElement, IconProps>(({ size = 20 }, ref) => (
  <svg ref={ref} data-testid="mock-icon" width={size} height={size} />
));

describe('SidenavItem Component', () => {
  const onClick = vi.fn();
  const onRefresh = vi.fn();

  const defaultProps = {
    label: 'Inbox',
    Icon: MockIcon,
    iconDataCy: 'sideNavInboxIcon',
  };

  const renderSidenavItem = (props = {}) => render(<SidenavItem {...defaultProps} {...props} />);

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it('renders the label and icon', () => {
    const { getByText, getByTestId } = renderSidenavItem();
    expect(getByText('Inbox')).toBeInTheDocument();
    expect(getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('calls onClick when the item is clicked', () => {
    const { container } = renderSidenavItem({ onClick });
    fireEvent.click(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the notifications badge when notifications is set', () => {
    const { getByText } = renderSidenavItem({ notifications: 5 });
    expect(getByText('5')).toBeInTheDocument();
  });

  it('does not render the notifications badge when notifications is 0', () => {
    const { queryByText } = renderSidenavItem({ notifications: 0 });
    expect(queryByText('0')).not.toBeInTheDocument();
  });

  it('does not show the refresh button when onRefresh is not provided', () => {
    const container = renderSidenavItem({ notifications: 5 }).container;
    fireEvent.mouseEnter(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element);
    expect(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]')).not.toBeInTheDocument();
  });

  it('hides notifications and shows the refresh button on hover when onRefresh is provided', () => {
    const { container, getByText, queryByText } = renderSidenavItem({ notifications: 5, onRefresh });
    expect(getByText('5')).toBeInTheDocument();

    fireEvent.mouseEnter(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element);

    expect(queryByText('5')).not.toBeInTheDocument();
    expect(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]')).toBeInTheDocument();
  });

  it('shows notifications again after the mouse leaves', () => {
    const { container, getByText } = renderSidenavItem({ notifications: 5, onRefresh });
    const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

    fireEvent.mouseEnter(item);
    fireEvent.mouseLeave(item);

    expect(getByText('5')).toBeInTheDocument();
  });

  it('calls onRefresh and not onClick when the refresh button is clicked', () => {
    const { container } = renderSidenavItem({ notifications: 5, onClick, onRefresh });
    const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

    fireEvent.mouseEnter(item);
    fireEvent.click(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]') as Element);

    expect(onRefresh).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('spins the refresh icon for exactly one second after clicking', () => {
    vi.useFakeTimers();
    const { container } = renderSidenavItem({ onRefresh });
    const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

    fireEvent.mouseEnter(item);
    const refreshButton = container.querySelector('[data-cy="sideNavInboxIcon-refresh"]') as Element;
    fireEvent.click(refreshButton);

    const icon = refreshButton.querySelector('svg') as Element;
    expect(icon).toHaveClass('animate-spin');

    act(() => {
      vi.advanceTimersByTime(999);
    });
    expect(icon).toHaveClass('animate-spin');

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(icon).not.toHaveClass('animate-spin');
  });

  it('keeps the refresh button visible while spinning even after the mouse leaves', () => {
    vi.useFakeTimers();
    const { container, queryByText } = renderSidenavItem({ notifications: 5, onRefresh });
    const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

    fireEvent.mouseEnter(item);
    fireEvent.click(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]') as Element);
    fireEvent.mouseLeave(item);

    expect(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]')).toBeInTheDocument();
    expect(queryByText('5')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
  });

  it('activates onClick when Enter is pressed on the item', () => {
    const { container } = renderSidenavItem({ onClick });
    fireEvent.keyDown(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element, { key: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('activates onRefresh when Enter is pressed on the refresh button without triggering onClick', () => {
    const { container } = renderSidenavItem({ notifications: 5, onClick, onRefresh });
    const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

    fireEvent.mouseEnter(item);
    fireEvent.keyDown(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]') as Element, { key: 'Enter' });

    expect(onRefresh).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });
});
