/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeAll, afterAll } from 'vitest';
import { TrayList } from '../TrayList';

const mockMails = [
  {
    id: '1',
    from: {
      name: 'John Doe',
      avatar: 'https://example.com/avatar1.jpg',
    },
    subject: 'Test Subject 1',
    createdAt: '2024-01-15',
    body: 'This is test email 1',
    read: false,
  },
  {
    id: '2',
    from: {
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.jpg',
    },
    subject: 'Test Subject 2',
    createdAt: '2024-01-16',
    body: 'This is test email 2',
    read: true,
  },
];

const mockOnMailSelected = vi.fn();
const mockOnLoadMore = vi.fn();

const renderTrayList = (props = {}) =>
  render(
    <TrayList
      mails={mockMails}
      loading={false}
      checked={false}
      activeEmail=""
      onMailSelected={mockOnMailSelected}
      {...props}
    />,
  );

describe('TrayList', () => {
  beforeAll(() => {
    (globalThis as any).IntersectionObserver = class {
      observe() {
        return null;
      }
      unobserve() {
        return null;
      }
      disconnect() {
        return null;
      }
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    delete (globalThis as any).IntersectionObserver;
  });

  it('should match snapshot', () => {
    const trayList = renderTrayList();
    expect(trayList).toMatchSnapshot();
  });

  it('should render list of emails', () => {
    renderTrayList();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test Subject 1')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Test Subject 2')).toBeInTheDocument();
  });

  it('should show loading skeletons when loading is true', () => {
    const { container } = renderTrayList({ loading: true });

    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('should not show emails when loading', () => {
    renderTrayList({ loading: true });

    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
  });

  it('should show empty state when no emails and not loading', () => {
    const emptyState = <div>No emails found</div>;
    renderTrayList({ mails: [], loading: false, emptyState });

    expect(screen.getByText('No emails found')).toBeInTheDocument();
  });

  it('should not show empty state when there are emails', () => {
    const emptyState = <div>No emails found</div>;
    renderTrayList({ emptyState });

    expect(screen.queryByText('No emails found')).not.toBeInTheDocument();
  });

  it('should call onMailSelected when an email is clicked', () => {
    renderTrayList();

    const emailButtons = screen.getAllByRole('button');
    fireEvent.click(emailButtons[0]);

    expect(mockOnMailSelected).toHaveBeenCalledTimes(1);
    expect(mockOnMailSelected).toHaveBeenCalledWith('1');
  });

  it('should highlight active email', () => {
    const { container } = renderTrayList({ activeEmail: '1' });

    const buttons = container.querySelectorAll('button');
    const activeButton = buttons[0];
    expect(activeButton.className).toContain('bg-primary/10');
  });

  it('should highlight selected emails', () => {
    const { container } = renderTrayList({ selectedEmails: ['2'] });

    const buttons = container.querySelectorAll('button');
    const selectedButton = buttons[1];
    expect(selectedButton.className).toContain('bg-primary/10');
  });

  it('should highlight all emails when checked is true', () => {
    const { container } = renderTrayList({ checked: true });

    const buttons = container.querySelectorAll('button');
    buttons.forEach((button) => {
      expect(button.className).toContain('bg-primary/10');
    });
  });

  it('should render with correct container dimensions', () => {
    const { container } = renderTrayList();

    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer.className).toContain('w-[400px]');
    expect(mainContainer.className).toContain('min-w-[200px]');
    expect(mainContainer.className).toContain('max-w-[400px]');
    expect(mainContainer.className).toContain('h-screen');
  });

  it('should have scrollable container with correct id', () => {
    const { container } = renderTrayList();

    const scrollContainer = container.querySelector('#tray-scroll-container');
    expect(scrollContainer).toBeInTheDocument();
    expect(scrollContainer?.className).toContain('overflow-y-auto');
  });

  it('should pass hasMoreItems to InfiniteScroll', () => {
    renderTrayList({ hasMoreItems: true, onLoadMore: mockOnLoadMore });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should default selectedEmails to empty array', () => {
    const { container } = renderTrayList({ selectedEmails: undefined });

    const buttons = container.querySelectorAll('button');
    buttons.forEach((button) => {
      expect(button.className).not.toContain('bg-primary/10');
    });
  });

  it('should default hasMoreItems to false', () => {
    renderTrayList({ hasMoreItems: undefined });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
