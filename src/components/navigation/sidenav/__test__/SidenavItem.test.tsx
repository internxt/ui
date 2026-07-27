import React from 'react';
import { IconProps } from '@phosphor-icons/react';
import { render, fireEvent, act } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import SidenavItem from '../SidenavItem';

const MockIcon = React.forwardRef<SVGSVGElement, IconProps>(({ size = 20 }, ref) => (
  <svg ref={ref} data-testid="mock-icon" width={size} height={size} />
));

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

test('When the item is rendered, then it shows the label and icon', () => {
  const { getByText, getByTestId } = renderSidenavItem();
  expect(getByText('Inbox')).toBeInTheDocument();
  expect(getByTestId('mock-icon')).toBeInTheDocument();
});

test('When the item is clicked, then onClick is called', () => {
  const { container } = renderSidenavItem({ onClick });
  fireEvent.click(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('When notifications is set, then the notifications badge is rendered', () => {
  const { getByText } = renderSidenavItem({ notifications: 5 });
  expect(getByText('5')).toBeInTheDocument();
});

test('When notifications is 0, then the notifications badge is not rendered', () => {
  const { queryByText } = renderSidenavItem({ notifications: 0 });
  expect(queryByText('0')).not.toBeInTheDocument();
});

test('When onRefresh is not provided and the item is hovered, then the refresh button is not shown', () => {
  const { container } = renderSidenavItem({ notifications: 5 });
  fireEvent.mouseEnter(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element);
  expect(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]')).not.toBeInTheDocument();
});

test('When onRefresh is provided and the item is hovered, then notifications hide and the refresh button shows', () => {
  const { container, getByText, queryByText } = renderSidenavItem({ notifications: 5, onRefresh });
  expect(getByText('5')).toBeInTheDocument();

  fireEvent.mouseEnter(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element);

  expect(queryByText('5')).not.toBeInTheDocument();
  expect(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]')).toBeInTheDocument();
});

test('When the mouse leaves after hovering, then notifications are shown again', () => {
  const { container, getByText } = renderSidenavItem({ notifications: 5, onRefresh });
  const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

  fireEvent.mouseEnter(item);
  fireEvent.mouseLeave(item);

  expect(getByText('5')).toBeInTheDocument();
});

test('When the refresh button is clicked, then onRefresh is called and onClick is not', () => {
  const { container } = renderSidenavItem({ notifications: 5, onClick, onRefresh });
  const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

  fireEvent.mouseEnter(item);
  fireEvent.click(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]') as Element);

  expect(onRefresh).toHaveBeenCalledTimes(1);
  expect(onClick).not.toHaveBeenCalled();
});

test('When the refresh button is clicked, then the icon spins for exactly one second', () => {
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

test('When the mouse leaves while the icon is spinning, then the refresh button stays visible', () => {
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

test('When Enter is pressed on the item, then onClick is activated', () => {
  const { container } = renderSidenavItem({ onClick });
  fireEvent.keyDown(container.querySelector('[data-cy="sideNavInboxIcon"]') as Element, { key: 'Enter' });
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('When Enter is pressed on the refresh button, then onRefresh is activated and onClick is not', () => {
  const { container } = renderSidenavItem({ notifications: 5, onClick, onRefresh });
  const item = container.querySelector('[data-cy="sideNavInboxIcon"]') as Element;

  fireEvent.mouseEnter(item);
  fireEvent.keyDown(container.querySelector('[data-cy="sideNavInboxIcon-refresh"]') as Element, { key: 'Enter' });

  expect(onRefresh).toHaveBeenCalledTimes(1);
  expect(onClick).not.toHaveBeenCalled();
});
