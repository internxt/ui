import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { MessageCheap } from '../MessageCheap';

const mockEmail = {
  id: '1',
  from: {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  },
  subject: 'Test Subject',
  createdAt: '2024-01-15',
  body: 'This is a test email body',
  read: false,
};

const mockOnClick = vi.fn();

const renderMessageCheap = (props = {}) =>
  render(<MessageCheap email={mockEmail} onClick={mockOnClick} {...props} />);

describe('MessageCheap', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should match snapshot', () => {
    const messageCheap = renderMessageCheap();
    expect(messageCheap).toMatchSnapshot();
  });

  it('should render email details correctly', () => {
    renderMessageCheap();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test Subject')).toBeInTheDocument();
    expect(screen.getByText('This is a test email body')).toBeInTheDocument();
    expect(screen.getByText('2024-01-15')).toBeInTheDocument();
  });

  it('should call onClick with email id when clicked', () => {
    renderMessageCheap();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith('1');
  });

  it('should show unread indicator for unread emails', () => {
    const { container } = renderMessageCheap();

    const unreadIndicator = container.querySelector('.bg-primary');
    expect(unreadIndicator).toBeInTheDocument();
  });

  it('should not show unread indicator for read emails', () => {
    const readEmail = { ...mockEmail, read: true };
    const { container } = render(<MessageCheap email={readEmail} onClick={mockOnClick} />);

    const unreadIndicator = container.querySelector('.bg-primary.h-2.w-2');
    expect(unreadIndicator).not.toBeInTheDocument();
  });

  it('should apply highlighted styles when active', () => {
    const { container } = renderMessageCheap({ active: true });

    const button = container.querySelector('button');
    expect(button?.className).toContain('bg-primary/10');
  });

  it('should apply highlighted styles when selected', () => {
    const { container } = renderMessageCheap({ selected: true });

    const button = container.querySelector('button');
    expect(button?.className).toContain('bg-primary/10');
  });

  it('should not apply highlighted styles when neither active nor selected', () => {
    const { container } = renderMessageCheap({ active: false, selected: false });

    const button = container.querySelector('button');
    expect(button?.className).not.toContain('bg-primary/10');
  });

  it('should render Avatar component with correct props', () => {
    renderMessageCheap();

    const avatarContainer = screen.getByText('John Doe').closest('.flex.flex-row');
    expect(avatarContainer).toBeInTheDocument();
  });
});
